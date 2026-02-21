import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import NewsCard from './components/news/NewsCard';
import Skeleton from './components/ui/Skeleton';
import Footer from './components/layout/Footer';
import { useNews } from './hooks/useNews';

const CATEGORIES = ['general', 'technology', 'business', 'science', 'health', 'sports', 'entertainment'];

// Fungsi Matematika untuk Layout Bento Grid
const getBentoLayoutClass = (index, totalArticles) => {
  // Mobile (Layar kecil): Semua 1 kolom, Headline sedikit lebih tinggi
  const baseMobileClass = index === 0 ? 'col-span-1 h-[400px]' : 'col-span-1 h-[320px]';
  
  // Desktop (Layar besar):
  let desktopClass = '';
  
  if (index === 0) {
    // Berita 1 (Besar): 2 Kolom, 2 Baris. Tinggi persis 624px (sejajar dengan 2 kartu 300px + gap 24px)
    desktopClass = 'md:col-span-2 md:row-span-2 md:h-[624px]';
  } else {
    // Variasi Pola agar tidak monoton (berulang setiap 7 berita)
    const pattern = (index - 3) % 7;
    
    // Penanganan item TERAKHIR agar tidak menyisakan ruang kosong di kanan
    if (index === totalArticles - 1) {
      const remainder = totalArticles % 3;
      if (remainder === 1) return `${baseMobileClass} md:col-span-3 md:h-[300px]`; // Memanjang penuhi 3 kolom
      if (remainder === 2) return `${baseMobileClass} md:col-span-2 md:h-[300px]`; // Memanjang penuhi 2 kolom
    }

    if (index > 2 && (pattern === 3 || pattern === 6)) {
      // Buat beberapa berita sesekali melebar ke 2 kolom
      desktopClass = 'md:col-span-2 md:h-[300px]';
    } else {
      // Default kartu kecil
      desktopClass = 'md:col-span-1 md:h-[300px]';
    }
  }

  return `${baseMobileClass} ${desktopClass}`;
};

function App() {
  const [isDark, setIsDark] = useState(true);
  const [activeCategory, setActiveCategory] = useState('technology');
  
  const { articles, isLoading, isError } = useNews(activeCategory);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [isDark]);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500 flex flex-col">
      <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
      
      <div className="pt-28 pb-12 px-6 flex-grow">
        <main className="max-w-7xl mx-auto">
          
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-2 capitalize transition-colors">
              {activeCategory === 'general' ? 'Top Headlines' : `${activeCategory} News`}
            </h1>
            {/* Subtitle diperbaiki warnanya */}
            <p className="text-zinc-500 dark:text-zinc-400 text-lg transition-colors">
              Berita terkini yang dikurasi untuk Anda.
            </p>
          </header>

          {/* Filter Bar Kategori diperbaiki warnanya */}
          <div className="flex overflow-x-auto pb-4 mb-8 gap-2 hide-scrollbar">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 border ${
                  activeCategory === category 
                    // AKTIF: Hitam di Light Mode, Indigo di Dark Mode (Teks selalu putih)
                    ? 'bg-zinc-900 text-white border-transparent dark:bg-indigo-500 dark:text-white shadow-md' 
                    // TIDAK AKTIF: Putih di Light Mode, Hitam/Zinc-900 di Dark Mode
                    : 'bg-white text-zinc-500 border-zinc-200 hover:text-zinc-900 dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800 dark:hover:text-white dark:hover:bg-zinc-800'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {isError && (
            <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-500 mb-8">
              Gagal memuat berita. Pastikan limit API tidak habis atau cek koneksi Anda.
            </div>
          )}

          {/* Grid Layout Bento dengan md:gap-6 (24px) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {isLoading && !isError && (
              <>
                <Skeleton isFeatured={true} />
                <Skeleton isFeatured={false} />
                <Skeleton isFeatured={false} />
                <Skeleton isFeatured={false} />
              </>
            )}

            {!isLoading && !isError && articles.map((article, index) => (
              <NewsCard 
                key={`${article.url}-${index}`} 
                article={article} 
                index={index}
                isHeadline={index === 0}
                layoutClass={getBentoLayoutClass(index, articles.length)}
              />
            ))}
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
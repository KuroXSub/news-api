import React, { useState, useEffect } from 'react';
import { Search, Bell, Sun, Moon } from 'lucide-react';

export default function Navbar({ isDark, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
      isScrolled 
        // Saat discroll: Background solid putih (light) / solid hitam (dark)
        ? 'bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border-zinc-200 dark:border-zinc-800 shadow-sm py-1' 
        // Saat di atas: Sedikit lebih transparan
        : 'bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md border-transparent py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center font-bold text-white shadow-md">
            N
          </div>
          <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white transition-colors">
            Kuro<span className="text-zinc-500 dark:text-zinc-400 font-medium">News</span>
          </span>
        </div>

        {/* Actions - Icon menggunakan text-zinc-500 dan berubah jadi putih saat dark mode */}
        <div className="flex items-center gap-2 md:gap-4">
            <button 
                onClick={() => alert('Fitur pencarian segera hadir!')}
                className="p-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-all"
            >
                <Search size={20} />
            </button>
            
            <button onClick={toggleTheme} className="...">
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button 
                onClick={() => alert('Anda tidak memiliki notifikasi baru.')}
                className="p-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-all"
            >
                <Bell size={20} />
            </button>
        </div>
      </div>
    </nav>
  );
}
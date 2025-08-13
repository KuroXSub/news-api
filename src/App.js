// App.js (Lengkap dengan Fitur Minor 1, 2, 3)
import React, { useState, useEffect, useCallback } from 'react';
import { fetchNews } from './services/newsApi';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import NewsList from './components/NewsList';
import Pagination from './components/Pagination';
import ScrollToTopButton from './components/ScrollToTopButton'; // Impor komponen baru
import './App.css';

// Fungsi untuk mendapatkan tema dari localStorage
const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme ? savedTheme : 'light';
};

// Fungsi untuk mendapatkan kategori dari localStorage
const getInitialCategory = () => {
  return localStorage.getItem('userCategory') || 'general';
};

function App() {
  const [newsData, setNewsData] = useState({
    articles: [],
    totalResults: 0,
    currentPage: 1,
  });
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  
  // 1. & 2. Gunakan fungsi inisialisasi untuk state
  const [category, setCategory] = useState(getInitialCategory);
  const [theme, setTheme] = useState(getInitialTheme);

  const totalPages = Math.min(Math.ceil(newsData.totalResults / 10), 10);

  const getNews = useCallback(async () => {
    setLoading(true);
    const data = await fetchNews(searchQuery, category, newsData.currentPage);
    setNewsData(data);
    setLoading(false);
  }, [searchQuery, category, newsData.currentPage]);

  // useEffect untuk debouncing
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(searchInput);
      setNewsData(prev => ({ ...prev, currentPage: 1 }));
    }, 500);
    return () => clearTimeout(timer);
  }, [searchInput]);

  // useEffect utama untuk mengambil data API
  useEffect(() => {
    getNews();
  }, [getNews]);

  // 2. useEffect untuk menerapkan tema (Mode Gelap)
  useEffect(() => {
    document.body.className = ''; // Reset kelas body
    document.body.classList.add(`${theme}-mode`);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleRefresh = () => {
    setSearchInput('');
    setCategory('general');
    localStorage.setItem('userCategory', 'general');
  };

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
    setSearchInput('');
    setSearchQuery('');
    setNewsData(prev => ({ ...prev, currentPage: 1 }));
    // 1. Simpan kategori ke localStorage
    localStorage.setItem('userCategory', selectedCategory);
  };

  const handlePageChange = (page) => {
    setNewsData(prev => ({ ...prev, currentPage: page }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 2. Fungsi untuk mengganti tema
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    // Penyesuaian kelas agar sesuai dengan sistem tema
    <div className="app"> 
      <header className="header-main p-3 shadow-sm">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h1 className="h3 m-0">Portal Berita 📰</h1>
            <div className="d-flex align-items-center">
              <button className="btn theme-switcher-btn me-2" onClick={toggleTheme}>
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
              <button className="btn btn-secondary btn-sm" onClick={handleRefresh} disabled={loading}>
                {loading ? '...' : 'Reset 🔄'}
              </button>
            </div>
          </div>
          <div className="header-controls">
            <SearchBar value={searchInput} onChange={setSearchInput} />
            <CategoryFilter onSelectCategory={handleCategorySelect} selectedCategory={category} />
          </div>
        </div>
      </header>

      <main className="container my-4">
        {loading ? (
          <div className="d-flex justify-content-center mt-5">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            <NewsList articles={newsData.articles} />
            {totalPages > 1 && (
              <Pagination
                currentPage={newsData.currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        )}
      </main>
      
      {/* 3. Tambahkan komponen Tombol Scroll to Top */}
      <ScrollToTopButton />
    </div>
  );
}

export default App;
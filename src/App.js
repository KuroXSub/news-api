import React, { useState, useEffect, useCallback } from 'react';
import { fetchNews } from './services/newsApi';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import NewsList from './components/NewsList';
import Pagination from './components/Pagination';
import './App.css';

function App() {
  const [newsData, setNewsData] = useState({
    articles: [],
    totalResults: 0,
    currentPage: 1
  });
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('general');

  const totalPages = Math.min(Math.ceil(newsData.totalResults / 10), 10);

  const getNews = useCallback(async () => {
    setLoading(true);
    const data = await fetchNews(searchQuery, category, newsData.currentPage);
    setNewsData(data);
    setLoading(false);
  }, [searchQuery, category, newsData.currentPage]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(searchInput);
      setNewsData(prev => ({ ...prev, currentPage: 1 }));
    }, 500);
    return () => clearTimeout(timer);
  }, [searchInput]);

  useEffect(() => {
    getNews();
  }, [getNews]);

  const handleRefresh = () => {
    getNews();
  };
  
  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
    setSearchInput('');
    setSearchQuery('');
    setNewsData(prev => ({ ...prev, currentPage: 1 }));
  };

  const handlePageChange = (page) => {
    setNewsData(prev => ({ ...prev, currentPage: page }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app bg-light">
      {}
      <header className="bg-dark text-white p-4 shadow-sm">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="h3">Portal Berita 📰</h1>
            {}
            <button className="btn btn-primary" onClick={handleRefresh} disabled={loading}>
              {loading ? 'Memuat...' : 'Refresh 🔄'}
            </button>
          </div>
          <div className="controls mt-3">
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
    </div>
  );
}

export default App;
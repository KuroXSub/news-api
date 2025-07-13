import React, { useState, useEffect } from 'react';
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
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');

  const totalPages = Math.ceil(newsData.totalResults / 10);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      const data = await fetchNews(searchQuery, category, newsData.currentPage);
      setNewsData(data);
      setLoading(false);
    };

    getNews();
  }, [searchQuery, category, newsData.currentPage]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCategory(''); // Reset kategori saat melakukan pencarian
    setNewsData(prev => ({ ...prev, currentPage: 1 }));
  };

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
    setSearchQuery(''); // Reset query saat memilih kategori
    setNewsData(prev => ({ ...prev, currentPage: 1 }));
  };

  const handlePageChange = (page) => {
    setNewsData(prev => ({ ...prev, currentPage: page }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      <header>
        <h1>News App</h1>
        <div className="controls">
          <SearchBar onSearch={handleSearch} />
          <CategoryFilter onSelectCategory={handleCategorySelect} />
        </div>
      </header>
      <main>
        {loading ? (
          <div className="loading">Loading news...</div>
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
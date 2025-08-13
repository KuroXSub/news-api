import React from 'react';
import NewsItem from './NewsItem'; // Buat komponen baru NewsItem

const NewsList = ({ articles }) => {
  if (!articles || articles.length === 0) {
    return <p className="text-center">Tidak ada berita yang ditemukan.</p>;
  }

  return (
    <div className="row g-4">
      {articles.map((article, index) => (
        <div className="col-md-6 col-lg-4" key={article.url || index}>
          <NewsItem article={article} />
        </div>
      ))}
    </div>
  );
};

export default NewsList;
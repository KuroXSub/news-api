import React from 'react';

const NewsItem = ({ article }) => {
  const placeholderImage = 'https://via.placeholder.com/400x200?text=Gambar+Tidak+Tersedia';

  return (
    <div className="card h-100 shadow-sm">
      <img 
        src={article.urlToImage || placeholderImage} 
        className="card-img-top" 
        alt={article.title} 
        style={{ height: '200px', objectFit: 'cover' }} 
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text text-muted flex-grow-1">{article.description}</p>
        <div className="mt-auto">
          <small className="text-body-secondary">Sumber: {article.source.name}</small>
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-sm d-block mt-2">
            Baca Selengkapnya
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
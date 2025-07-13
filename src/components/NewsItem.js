import React from 'react';
import './NewsItem.css';

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage, publishedAt, source } = article;

  return (
    <div className="news-item">
      {urlToImage && (
        <div className="news-image">
          <img src={urlToImage} alt={title} />
        </div>
      )}
      <div className="news-content">
        <h3>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
        <p>{description}</p>
        <div className="news-meta">
          <span>{source?.name}</span>
          <span>{new Date(publishedAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
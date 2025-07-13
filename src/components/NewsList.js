import React from 'react';
import NewsItem from './NewsItem';

const NewsList = ({ articles }) => {
  if (!articles || articles.length === 0) {
    return <div className="no-news">No news found. Try a different search.</div>;
  }

  return (
    <div className="news-list">
      {articles.map((article, index) => (
        <NewsItem key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
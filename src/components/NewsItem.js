// components/NewsItem.js

import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { id } from 'date-fns/locale';

const NewsItem = ({ article }) => {
  const placeholderImage = 'https://via.placeholder.com/400x200?text=Gambar+Tidak+Tersedia';

  const getTimeAgo = (dateString) => {
    try {
      return formatDistanceToNow(new Date(dateString), {
        addSuffix: true,
        locale: id,
      });
    } catch (error) {
      return 'Tanggal tidak valid';
    }
  };

  return (
    <div className="card h-100 shadow-sm card-news">
      {/* PERUBAHAN 1: Buat thumbnail menjadi tautan */}
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="card-img-link">
        <img
          src={article.urlToImage || placeholderImage}
          className="card-img-top"
          alt={article.title}
        />
      </a>
      <div className="card-body d-flex flex-column">
        {/* PERUBAHAN 2: Buat judul menjadi tautan */}
        <h5 className="card-title">
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="title-link">
            {article.title}
          </a>
        </h5>
        <p className="card-text text-muted flex-grow-1">{article.description}</p>
        <div className="mt-auto">
          <small className="text-body-secondary d-block mb-2">
            {getTimeAgo(article.publishedAt)}
          </small>
          <small className="text-body-secondary">Sumber: {article.source.name}</small>
          {/* PERUBAHAN 3: Ubah warna tombol menjadi btn-primary (biru) */}
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm d-block mt-2">
            Baca Selengkapnya
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
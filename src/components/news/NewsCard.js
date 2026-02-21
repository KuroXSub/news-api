import React from 'react';
import { motion } from 'framer-motion';
import { formatDate } from '../../utils/formatDate';

export default function NewsCard({ article, index, layoutClass, isHeadline }) {
  const imageUrl = article.urlToImage || `https://source.unsplash.com/random/800x600/?${article.source?.name || 'news'}`;

  // Fungsi untuk membuka URL artikel
  const handleCardClick = () => {
    window.open(article.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.article 
      onClick={handleCardClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (index % 10) * 0.1 }} // Reset delay tiap 10 item
      viewport={{ once: true, margin: "-50px" }}
      className={`group relative flex flex-col justify-end rounded-2xl overflow-hidden cursor-pointer border border-border hover:border-accent/50 transition-colors bg-surface ${layoutClass}`}
    >
      <img 
        src={imageUrl} 
        alt={article.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative p-6 flex flex-col justify-end h-full">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-3 py-1.5 text-xs font-bold text-white bg-accent shadow-lg shadow-black/20 rounded-full">
            {article.source?.name || 'Unknown'}
          </span>
          <span className="text-xs text-zinc-300 flex items-center gap-1 drop-shadow-md">
            {formatDate(article.publishedAt)}
          </span>
        </div>
        
        <h3 className={`font-bold text-white leading-snug line-clamp-3 group-hover:text-indigo-200 transition-colors ${isHeadline ? 'text-2xl md:text-4xl' : 'text-lg md:text-xl'}`}>
          {article.title}
        </h3>
        
        {isHeadline && (
          <p className="text-sm md:text-base text-zinc-300 mt-3 line-clamp-2">
            {article.description}
          </p>
        )}
      </div>
    </motion.article>
  );
}
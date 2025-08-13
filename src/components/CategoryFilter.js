// components/CategoryFilter.js
import React from 'react';

const CategoryFilter = ({ onSelectCategory, selectedCategory }) => {
  const categories = ['general', 'business', 'technology', 'entertainment', 'sports', 'health'];

  return (
    <div className="category-filter">
      {categories.map(category => (
        <button
          key={category}
          className={`btn category-btn ${selectedCategory === category ? 'active' : ''}`}
          onClick={() => onSelectCategory(category)}
        >
          {/* Mengubah huruf pertama menjadi kapital untuk tampilan */}
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
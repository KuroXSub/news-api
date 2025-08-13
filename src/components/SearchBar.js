import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      className="form-control form-control-lg"
      type="text"
      placeholder="Ketik untuk mencari berita..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBar;
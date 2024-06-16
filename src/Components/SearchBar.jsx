// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar d-flex  mt-3 flex-column flex-md-row">
      <input
        type="text"
        placeholder="Enter city name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="form-control me-2"
      />
      <button type="submit" className="btn btn-success">Search</button>
    </form>
  );
};

export default SearchBar;

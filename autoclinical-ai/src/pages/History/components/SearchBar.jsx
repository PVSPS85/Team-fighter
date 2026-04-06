import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <Search className="search-icon" size={18} />
      <input 
        type="text" 
        className="search-input" 
        placeholder="Search reports..." 
      />
    </div>
  );
};

export default SearchBar;

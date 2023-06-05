import React from 'react';
import "./SearchBar.css";

const SearchBar = ({ handleChange }) => {
  return (
    <div>
      <input className="search-bar" type="text" placeholder="Busca un colaborador" onChange={handleChange} />
    </div>
  );
}

export default SearchBar;

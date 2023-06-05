import React from 'react';
import SearchBar from '../Searchbar/SearchBar';
import "./Header.css";

const Header = ({ handleSearch }) => {
  const handleChange = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <header className='header'>
      <h1>Buscador de Colaboradores</h1>
      <SearchBar handleChange={handleChange}></SearchBar>
    </header>
  );
}

export default Header;

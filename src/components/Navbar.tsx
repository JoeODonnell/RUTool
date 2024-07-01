import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


type NavbarProps = {
    onSearch: (applicationId: string) => void;
  }




const Navbar: React.FC<NavbarProps>  = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    history.push(`/?search=${searchTerm}`);
  }

  return (
<nav className='navbar'>
    <div className='search__page'>
      <form onSubmit={handleSearch} className='search-form'>
        <div className='search-container'>
          <input
            type="text"
            className='inputsearch'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by Application ID"
          />
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  </nav>
  );
};

export default Navbar;

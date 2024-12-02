import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaSearch } from 'react-icons/fa'; 

const SearchBar = () => {
    return (
        <div className="input-group mb-3" style={{ maxWidth: '400px', margin: 'auto' }}>
            <input
                type="text"
                className="form-control"
                placeholder="Search for recipes..."
                aria-label="Search for recipes"
                aria-describedby="button-addon2"
            />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">
            <FaSearch className="search-bar-icon" />
            </button>
        </div>
    );
};

export default SearchBar;

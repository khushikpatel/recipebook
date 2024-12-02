import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';  // Import the search icon
import './searchBar.css';  // Import the custom CSS file

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('');
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // Fetch all recipes when the component mounts
        fetch('/api/recipes')  // Replace with your API or data source
            .then(response => response.json())
            .then(data => setRecipes(data))
            .catch(error => console.error('Error fetching recipes:', error));
    }, []);

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchInput(query);

        if (query.length > 0) {
            const filtered = recipes.filter(recipe =>
                recipe.name.toLowerCase().includes(query)
            );
            setFilteredRecipes(filtered);
        } else {
            setFilteredRecipes([]);
        }
    };

    return (
        <div className="search-bar-container">
            <div className="search-bar-wrapper">
                <input
                    type="text"
                    placeholder="Search recipes..."
                    value={searchInput}
                    onChange={handleSearch}
                    className="search-bar-input"
                />
                <FaSearch className="search-bar-icon" />
            </div>

            <ul className="search-results">
                {filteredRecipes.map(recipe => (
                    <li key={recipe.id}>
                        <Link to={`/recipes/${recipe.id}`}>
                            {recipe.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchBar;

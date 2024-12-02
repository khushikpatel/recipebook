import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';  // Import the search icon
import './searchbar.css';  // Import the custom CSS file
import axios from 'axios';
const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('');
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch all recipes when the component mounts
        axios.get('http://127.0.0.1:8000/api/get-recipe/')  // Replace with your actual API endpoint
        .then(response => {
          console.log(response.data)
          setRecipes(response.data.data);  // Assuming the API returns the recipes under 'data'
        })
        .catch((error) => {
          console.error('Error fetching recipes:', error);
        });
    }, []);

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchInput(query);
    
        if (query.length > 0) {
            const filtered = recipes.filter(recipe => {
                // Ensure recipe.name is defined and a string before calling .toLowerCase()
                return recipe.name && typeof recipe.name === 'string' && 
                       recipe.name.toLowerCase().includes(query);
            });
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

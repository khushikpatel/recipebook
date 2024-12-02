// CategoryPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryPage = ({ match }) => {
    const [recipes, setRecipes] = useState([]);
    const categoryId = match.params.id;  // Get the category ID from the URL

    useEffect(() => {
        axios.get(`http://localhost:8000/api/recipes/?category=${categoryId}`)
            .then(response => {
                setRecipes(response.data);
            })
            .catch(error => {
                console.error('Error fetching recipes', error);
            });
    }, [categoryId]);

    return (
        <div>
            <h1>Category Recipes</h1>
            {recipes.map(recipe => (
                <div key={recipe.id}>
                    <h3>{recipe.name}</h3>
                    <p>{recipe.description}</p>
                </div>
            ))}
        </div>
    );
};

export default CategoryPage;

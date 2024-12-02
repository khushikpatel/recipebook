import React, { useState, useEffect } from 'react';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch('./main.js'); // Path to your JSON file
                if (!response.ok) {
                    throw new Error('Failed to load recipes');
                }
                const data = await response.json();
                setRecipes(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchRecipes();
    }, []);

    if (loading) return <div>Loading recipes...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Recipe List</h2>
            <ul>
                {recipes.map((recipe) => (
                      <div className="container mt-3">
      <h2>Recipe List</h2>
      <div className="row">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="col-md-4 card-container">
            <div className="card h-100 shadow-sm">
              <img src={recipe.image} className="card-img-top" alt={recipe.recipe_name} />
              <div className="card-body">
                <h5 className="card-title">{recipe.recipe_name}</h5>
                <p className="card-text">{recipe.description}</p>
                <p><strong>Prep Time:</strong> {recipe.prep_time} mins</p>
                <p><strong>Cook Time:</strong> {recipe.cook_time} mins</p>
                <p><strong>Servings:</strong> {recipe.servings}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;

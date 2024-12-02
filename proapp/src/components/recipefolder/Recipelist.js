import React, { useEffect, useState } from 'react';
import axios from 'axios';
function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the recipes from the Django API
    axios.get('http://127.0.0.1:8000/api/get-recipe/')  // Replace with your actual API endpoint
      .then(response => {
        console.log(response.data)
        setRecipes(response.data.data);  // Assuming the API returns the recipes under 'data'
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
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
  );
}

export default RecipeList;

import React from 'react';
import { useParams } from 'react-router-dom';

function RecipeCategory() {
  const { category } = useParams();

  return (
    <div className="container">
      <h1>{category} Recipes</h1>
      {/* Add recipe cards and details specific to the category */}
    </div>
  );
}

export default RecipeCategory;

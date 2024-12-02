import React from 'react';
import { Link } from 'react-router-dom';
import './1.css'; // Ensure this path is correct for your CSS file

function Breakfast() {
  const breakfastRecipes = [
    { id: 1, name: 'Pancakes', img: require('../images/pancake.webp') },
    { id: 2, name: 'Sandwich', img: require('./images/sandwich.webp') },
    { id: 3, name: 'Pohe', img: require('./images/Poha.webp') },

    // Add more breakfast recipes here
  ];

  return (
    <div className="container mt-5">
      <h2>Breakfast Recipes</h2>
      <div className="row ">
        {breakfastRecipes.map((recipe, index) => (
          <div key={index} className="col-md-4 card-container">
            <Link to={`/recipe/breakfast/details/${recipe.name.toLowerCase()}`}>
              <div className="card h-100 shadow-sm">
                <img src={recipe.img} className="card-img-top" alt={recipe.name} />
                <div className="card-body">
                  <h5 className="card-title">{recipe.name}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Breakfast;

import React from 'react';
import { Link } from 'react-router-dom';

function Dessert() {
  const breakfastRecipes = [
    { id: 1, name: 'Fudgy Brownies', img: require('../images/Fudgy Brownies.webp') },
    { id: 2, name: 'Lemon Blueberry Bread', img: require('../images/lemonbluberry.webp') },
    { id: 3, name: 'Crustless Cheesecake', img: require('../images/crustule chesse cake.webp') },
    // Add more breakfast recipes here
  ];

  return (
    <div className="container mt-5">
      <h2>Dessert Recipes</h2>
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

export default Dessert;

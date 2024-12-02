import React from 'react';
import { Link } from 'react-router-dom';

function Brunch() {
  const breakfastRecipes = [
    { id: 1, name: 'Masala Baked Indian Eggs', img: require('./images/Masala Baked Indian Eggs.webp') },
    { id: 2, name: 'channaMasala', img: require('./images/chanamasala.webp') },
    { id: 3, name: 'Classic South Indian Rava Idli', img: require('./images/idli.webp') },
    // Add more breakfast recipes here
  ];

  return (
    <div className="container mt-5">
      <h2>brunch Recipes</h2>
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

export default Brunch;

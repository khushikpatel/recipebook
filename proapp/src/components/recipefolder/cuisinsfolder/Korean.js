import React from 'react';
import { Link } from 'react-router-dom';

function Korean() {
  const BirthdayRecipes = [
    { id: 1, name: 'Pancakes', img: require('../images/Brunch.jpg') },
    { id: 2, name: 'Omelette', img: require('../images/Brunch.jpg') },
    { id: 3, name: 'Smoothie Bowl', img: require('../images/Brunch.jpg') },
    // Add more breakfast recipes here
  ];

  return (
    <div className="container mt-5">
      <h2>Korean Recipes</h2>
      <div className="row ">
        {BirthdayRecipes.map((recipe, index) => (
          <div key={index} className="col-md-4 card-container">
            <Link to={`/recipe/Birthday/details/${recipe.name.toLowerCase()}`}>
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

export default Korean;

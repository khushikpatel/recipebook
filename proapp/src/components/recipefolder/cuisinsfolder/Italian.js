import React from 'react';
import { Link } from 'react-router-dom';

function Italian() {
  const BirthdayRecipes = [
    { id: 1, name: 'Pancakes', img: require('../images/black magic cake.webp') },
    { id: 2, name: 'Omelette', img: require('../images/Lunch.jpg') },
    { id: 3, name: 'Smoothie Bowl', img: require('../images/spicytofunachos.jpeg') },
    // Add more breakfast recipes here
  ];

  return (
    <div className="container mt-5">
      <h2>italian Recipes</h2>
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

export default Italian;

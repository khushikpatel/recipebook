import React from 'react';
import { Link } from 'react-router-dom';

function Dinner() {
  const breakfastRecipes = [
    { id: 1, name: 'Pav Bhaji', img: require('../categoriesfolder/images/pav-bhaji.jpeg') },
    { id: 2, name: 'One Pot Stuffed Pepper Casserole', img: require('./images/OnePotStuffedPepperCasserole.webp') },
    { id: 3, name: 'Crockpot Lasagna Soup', img: require('./images/Crockpot Lasagna Soup.webp') },
    // Add more breakfast recipes here
  ];

  return (
    <div className="container mt-5">
      <h2>Dinner Recipes</h2>
      <div className="row">
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

export default Dinner;

import React from 'react';
import { Link } from 'react-router-dom';

function Thai() {
  const BirthdayRecipes = [
    { id: 1, name: 'Pad Thai', img: require('../categoriesfolder/images/black magic cake.webp') },
{ id: 2, name: 'Green Curry', img: require('../categoriesfolder/images/black magic cake.webp') },
{ id: 3, name: 'Tom Yum Soup', img: require('../categoriesfolder/images/black magic cake.webp') },
{ id: 4, name: 'Som Tum (Papaya Salad)', img: require('../categoriesfolder/images/black magic cake.webp') },
{ id: 5, name: 'Mango Sticky Rice', img: require('../categoriesfolder/images/black magic cake.webp') },

  ];

  return (
    <div className="container mt-5">
      <h2>Thai Recipes</h2>
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

export default Thai;

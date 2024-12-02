import React from 'react';
import { Link } from 'react-router-dom';

function NewYears() {
  const BirthdayRecipes = [
    { id: 1, name: 'Champagne Cupcakes', img: require('../categoriesfolder/images/black magic cake.webp') },
    { id: 2, name: 'Shrimp Cocktail', img: require('../categoriesfolder/images/black magic cake.webp') },
    { id: 3, name: 'Mini Sliders', img: require('../categoriesfolder/images/Baklava.png') },
    { id: 4, name: 'Cheese Fondue', img: require('../categoriesfolder/images/black magic cake.webp') },
    { id: 5, name: 'Spinach and Artichoke Dip', img: require('../categoriesfolder/images/black magic cake.webp') },
    
  ];

  return (
    <div className="container mt-5">
      <h2>newyeareveday Recipes</h2>
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

export default NewYears;

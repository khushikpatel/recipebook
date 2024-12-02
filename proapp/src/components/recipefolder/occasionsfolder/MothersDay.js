import React from 'react';
import { Link } from 'react-router-dom';

function Mothersday() {
  const BirthdayRecipes = [
    { id: 1, name: 'Lemon Drizzle Cake', img: require('../categoriesfolder/images/Baklava.png') },
    { id: 2, name: 'Quiche Lorraine', img: require('../categoriesfolder/images/Baklava.png') },
    { id: 3, name: 'French Toast with Berries', img: require('../categoriesfolder/images/Baklava.png') },
    { id: 4, name: 'Eggs Benedict', img: require('../images/Energy ball.webp') },
    { id: 5, name: 'Berry Tart', img: require('../images/Brunch.jpg') },
    
  ];

  return (
    <div className="container mt-5">
      <h2>Fathers day Recipes</h2>
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

export default Mothersday;

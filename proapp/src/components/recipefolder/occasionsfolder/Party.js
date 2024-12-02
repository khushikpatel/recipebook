import React from 'react';
import { Link } from 'react-router-dom';

function Party() {
  const BirthdayRecipes = [
    { id: 1, name: 'Stuffed Mushrooms', img: require('../categoriesfolder/images/Stuffed Mushrooms.jpg') },
    { id: 2, name: 'Buffalo Chicken Wings', img: require('../categoriesfolder/images/Chicken Nugget.jpeg') },
    { id: 3, name: 'Tacos', img: require('../images/Taco Cups.webp')},
    { id: 4, name: 'Pizza Bites', img: require('../categoriesfolder/images/PizzaBagels.jpg') },
    { id: 5, name: 'Fruit Punch', img: require('../categoriesfolder/images/Fruit Sorbet.jpeg') },
    
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

export default Party;

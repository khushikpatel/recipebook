import React from 'react';
import { Link } from 'react-router-dom';

function Family() {
  const BirthdayRecipes = [
    { id: 1, name: 'Spaghetti and Meatballs', img: require('../categoriesfolder/images/Spaghetti and Meatballs.jpg') },
    { id: 2, name: 'Baked Chicken and Rice', img: require('../categoriesfolder/images/Baked Chicken and Rice.jpeg') },
    { id: 3, name: 'Beef Stew', img: require('../categoriesfolder/images/beaf stew.jpeg') },
    { id: 4, name: 'Stuffed Peppers', img: require('../categoriesfolder/images/Stuffed Peppers.jpeg') },
    { id: 5, name: 'Vegetable Stir-Fry', img: require('../categoriesfolder/images/Vegetable Stir-Fry.jpeg') },
  ];

  return (
    <div className="container mt-5">
      <h2>Family Dinner Recipes</h2>
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

export default Family;

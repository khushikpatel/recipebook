import React from 'react';
import { Link } from 'react-router-dom';

function Minmeals() {
  const BirthdayRecipes = [
    { id: 1, name: 'Shrimp Stir-Fry', img: require('../categoriesfolder/images/Vegetable Stir-Fry.jpeg') },
    { id: 2, name: 'Chicken Quesadillas', img: require('../categoriesfolder/images/Chickpea Curry.jpg') },
    { id: 3, name: 'Pasta Primavera', img: require('../categoriesfolder/images/PastaButterParmesan.jpeg') },
    { id: 4, name: 'Taco Salad', img: require('../categoriesfolder/images/Taco Cups.webp') },
    { id: 5, name: 'Caprese Salad', img: require('../categoriesfolder/images/Quinoa Salad.jpg') },
    
  ];

  return (
    <div className="container mt-5">
      <h2>30 min meals Recipes</h2>
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

export default Minmeals;

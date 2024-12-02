import React from 'react';
import { Link } from 'react-router-dom';

function DairyFree() {
  const BirthdayRecipes = [
    { id: 1, name: 'Chickpea Curry', img: require('../categoriesfolder/images/Chickpea Curry.jpg') },
    { id: 2, name: 'Quinoa Salad', img: require('../categoriesfolder/images/Quinoa Salad.jpg') },
    { id: 3, name: 'Avocado Toast', img: require('../categoriesfolder/images/Avocado Toast.jpg') },
    { id: 4, name: 'Zucchini Noodles', img: require('../categoriesfolder/images/Zucchini Noodles.jpg') },
    { id: 5, name: 'Fruit Sorbet', img: require('../categoriesfolder/images/Fruit Sorbet.jpeg') },
    
  ];

  return (
    <div className="container mt-5">
      <h2>Dairy Free Recipes</h2>
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

export default DairyFree;

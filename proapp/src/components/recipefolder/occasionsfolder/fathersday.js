import React from 'react';
import { Link } from 'react-router-dom';

function Fathersday() {
  const BirthdayRecipes = [
    { id: 1, name: 'Grilled Steak', img: require('../categoriesfolder/images/black magic cake.webp') },
    { id: 2, name: 'BBQ Ribs', img: require('../categoriesfolder/images/black magic cake.webp') },
    { id: 3, name: 'Bacon-Wrapped Asparagus', img: require('../categoriesfolder/images/black magic cake.webp') },
    { id: 4, name: 'Burgers with Special Sauce', img: require('../categoriesfolder/images/black magic cake.webp') },
    { id: 5, name: 'Loaded Nachos', img: require('../categoriesfolder/images/Tacos al Pastor.jpeg') },
    
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

export default Fathersday;

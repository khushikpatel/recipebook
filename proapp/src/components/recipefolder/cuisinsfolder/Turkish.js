import React from 'react';
import { Link } from 'react-router-dom';

function Turkish() {
  const BirthdayRecipes = [
    { id: 1, name: 'Kebabs', img: require('../categoriesfolder/images/Kebabs.jpeg') },
    { id: 2, name: 'Baklava', img: require('../categoriesfolder/images/Baklava.png') },
    { id: 3, name: 'Lahmacun', img: require('../categoriesfolder/images/Lahmacun.jpeg') },
    { id: 4, name: 'Dolma', img: require('../categoriesfolder/images/Dolma.avif') },
    { id: 5, name: 'Turkish Delight', img: require('../categoriesfolder/images/Turkish Delight.webp') },
    
  ];

  return (
    <div className="container mt-5">
      <h2>Turkish Recipes</h2>
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

export default Turkish;

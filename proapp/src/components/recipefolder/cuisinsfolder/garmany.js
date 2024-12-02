import React from 'react';
import { Link } from 'react-router-dom';

function Maxican() {
  const BirthdayRecipes = [
    { id: 1, name: 'Bratwurst', img: require('../categoriesfolder/images/black magic cake.webp') },
    { id: 2, name: 'Sauerbraten', img: require('../categoriesfolder/images/black magic cake.webp') },
    { id: 3, name: 'Pretzels', img: require('../categoriesfolder/images/black magic cake.webp') },
    { id: 4, name: 'Kartoffelsalat (Potato Salad)', img: require('../categoriesfolder/images/black magic cake.webp') },
    { id: 5, name: 'Schwarzwälder Kirschtorte (Black Forest Cake)', img: require('../categoriesfolder/images/black magic cake.webp') },    
  ];

  return (
    <div className="container mt-5">
      <h2>Maxican Recipes</h2>
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

export default Maxican;

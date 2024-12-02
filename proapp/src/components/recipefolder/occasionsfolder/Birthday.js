import React from 'react';
import { Link } from 'react-router-dom';

function Birthday() {
  const BirthdayRecipes = [
    { id: 1, name: 'Chocolate Cake', img: require('../images/chocolatecake.jpg') },
    { id: 2, name: 'Vanilla Cupcakes', img: require('../images/venilacupcakes.webp') },
    { id: 3, name: 'Strawberry Cheesecake', img: require('../images/strwbery cheese cake.jpeg') },
    { id: 4, name: 'Rainbow Layer Cake', img: require('../images/raibowlayercake.jpg') },
    { id: 5, name: 'Birthday Cake Ice Cream', img: require('../images/strawberycake.jpeg') },
    { id: 5, name: 'BlackMagicCake', img: require('../images/black magic cake.webp') },
  ];

  return (
    <div className="container mt-5">
      <h2>Birthday Recipes</h2>
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

export default Birthday;

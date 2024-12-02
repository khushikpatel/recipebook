import React from 'react';
import { Link } from 'react-router-dom';

function BBQ() {
  const BirthdayRecipes = [
    { id: 1, name: 'BBQ Ribs', img: require('../images/Taco Cups.webp') },
    { id: 2, name: 'Grilled Corn on the Cob', img: require('../images/breakfast.jpg') },
    { id: 3, name: 'Pulled Pork Sandwiches', img: require('../images/crustule chesse cake.webp') },
    { id: 4, name: 'Chicken Skewers', img: require('../images/breakfast.jpg')},
    { id: 5, name: 'BBQ Baked Beans', img: require('../images/Fudgy Brownies.webp') },   
  ];
  return (
    <div className="container mt-5">
      <h2>BBQ Recipes</h2>
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

export default BBQ;

import React from 'react';
import { Link } from 'react-router-dom';

function Lunch() {
  const breakfastRecipes = [
    { id: 1, name: 'Dal Bati', img: require('../images/Dalbati.jpeg') },
    { id: 2, name: 'Rajma-Chawal', img: require('../categoriesfolder/images/rajma chwal.jpg') },
    { id: 3, name: 'Dal-Chawal', img: require('../categoriesfolder/images/dal chwal.jpeg') },
    // Add more breakfast recipes here
  ];

  return (
    <div className="container mt-5">
      <h2>Lunch Recipes</h2>
      <div className="row">
        {breakfastRecipes.map((recipe, index) => (
          <div key={index} className="col-md-4 card-container">
            <Link to={`/recipe/breakfast/details/${recipe.name.toLowerCase()}`}>
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

export default Lunch;

import React from 'react';
import { Link } from 'react-router-dom';

function Holidays() {
  const BirthdayRecipes = [
    { id: 1, name: 'Roast Turkey', img: require('../categoriesfolder/images/black magic cake.webp') },
    { id: 2, name: 'Roast Turke', img: require('../categoriesfolder/images/black magic cake.webp') },
    { id: 3, name: 'Gingerbread Cookies', img: require('../categoriesfolder/images/Mini Veggie Muffins.jpeg') },
    { id: 4, name: 'Eggnog', img: require('../categoriesfolder/images/Mini Veggie Muffins.jpeg') },
    { id: 5, name: 'Mashed Potatoes', img: require('../categoriesfolder/images/black magic cake.webp') },
    
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

export default Holidays;

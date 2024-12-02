import React from 'react';
import { Link } from 'react-router-dom';

function Toddlers() {
  const BirthdayRecipes = [
    { id: 1, name: 'Mini Veggie Muffins', img: require('../categoriesfolder/images/Mini Veggie Muffins.jpeg') },
    { id: 2, name: 'Peanut Butter Banana Toast', img: require('../categoriesfolder/images/Peanut Butter Banana Toast.jpeg') },
    { id: 3, name: 'Cheesy Cauliflower Bites', img: require('../categoriesfolder/images/Cheesy Cauliflower Bites.jpeg') },
    { id: 4, name: 'Fruit and Yogurt Parfait', img: require('../categoriesfolder/images/Fruit Sorbet.jpeg') },
    { id: 5, name: 'Chicken Nuggets', img: require('../categoriesfolder/images/Chicken Nugget.jpeg') },
    
  ];

  return (
    <div className="container mt-5">
      <h2>Toddlers Recipes</h2>
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

export default Toddlers;

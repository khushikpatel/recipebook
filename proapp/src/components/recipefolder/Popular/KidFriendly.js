import React from 'react';
import { Link } from 'react-router-dom';

function Kids() {
  const BirthdayRecipes = [
    { id: 1, name: 'Pizza Bagels', img: require('../categoriesfolder/images/PizzaBagels.jpg') },
    { id: 2, name: 'Pasta with Butter and Parmesan', img: require('../categoriesfolder/images/PastaButterParmesan.jpeg') },
    { id: 3, name: 'Fruit Kabobs', img: require('../categoriesfolder/images/FruitKabobs.jpeg') },
    { id: 4, name: 'Cheesy Broccoli Rice Casserole', img: require('../categoriesfolder/images/BroccoliRiceCasserole.jpg') },
    { id: 5, name: 'Mini Pancakes', img: require('../categoriesfolder/images/minipancakes.jpg') },
  ];

  return (
    <div className="container mt-5">
      <h2>Kids Friendly Recipes</h2>
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

export default Kids;

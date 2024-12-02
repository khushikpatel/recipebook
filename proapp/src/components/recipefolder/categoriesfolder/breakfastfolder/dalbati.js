import React from 'react';
import { useNavigate } from 'react-router-dom';
import './breakfast.css';

function DalBaati() {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/order-ingredients');
  };

  return (
    <div className="container mt-5 pancake-details-page">
      <div className="row">
        <div className="col-md-6">
          <img src={require('../images/Dalbati.jpeg')} alt="Dal Baati" className="img-fluid shadow-lg" />
          <div className="info-box mt-3 p-3 shadow-sm">
            <p><strong>Serving Size:</strong> 2 people</p>
            <p><strong>Prep Time:</strong> 20 minutes</p>
            <p><strong>Cooking Time:</strong> 30 minutes</p>
            <p><strong>Nutritions:</strong> 450 Calories</p>
          </div>
        </div>

        <div className="col-md-6">
          <h4>Ingredients</h4>
          <div className="ingredients-list">
            <p>1 cup whole wheat flour</p>
            <p>1/4 cup semolina (rava)</p>
            <p>1/4 cup ghee (for dough and serving)</p>
            <p>Salt to taste</p>
            <p>1 cup yellow split lentils (dal)</p>
            <p>1 onion (chopped)</p>
            <p>2 tomatoes (chopped)</p>
            <p>Spices (cumin, turmeric, chili powder)</p>
          </div>

          <button className="btn btn-primary mt-3" onClick={handleOrderClick}>
            Order Ingredients
          </button>

          <h4 className="mt-4">Recipe Instructions</h4>
          <div className="recipe-steps">
            <p>Make a dough with flour, semolina, ghee, and salt; divide into balls.</p>
            <p>Boil and cook the dal with spices until soft.</p>
            <p>Bake the baatis in a tandoor or oven until golden.</p>
            <p>Serve hot with ghee and dal.</p>
          </div>
        </div>
        <div className="tips-hints-box">
            <h5>Tips and Hints</h5>
            <p>Tips: Pair with spicy dal and a dollop of ghee for the best experience.</p>
            <p>Hints: Use ghee for the baati for richer flavor. Bake until golden brown for a crispy exterior.</p>
          </div>

          <div>Recipe created by</div>
      </div>
    </div>
  );
}

export default DalBaati;

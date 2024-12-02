import React from 'react';
import { useNavigate } from 'react-router-dom';
import './breakfast.css';

function DalChawal() {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/order-ingredients');
  };

  return (
    <div className="container mt-5 pancake-details-page">
      <div className="row">
        <div className="col-md-6">
          <img src={require('../images/dal chwal.jpeg')} alt="Dal Chawal" className="img-fluid shadow-lg" />
          <div className="info-box mt-3 p-3 shadow-sm">
            <p><strong>Serving Size:</strong> 2 people</p>
            <p><strong>Prep Time:</strong> 10 minutes</p>
            <p><strong>Cooking Time:</strong> 20 minutes</p>
            <p><strong>Nutritions:</strong> 350 Calories</p>
          </div>
        </div>

        <div className="col-md-6">
          <h4>Ingredients</h4>
          <div className="ingredients-list">
            <p>1 cup rice</p>
            <p>1 cup yellow lentils (moong dal)</p>
            <p>1 onion (chopped)</p>
            <p>2 tomatoes (chopped)</p>
            <p>Spices (cumin, turmeric, coriander)</p>
            <p>Salt to taste</p>
            <p>Ghee or oil for tempering</p>
          </div>

          <button className="btn btn-primary mt-3" onClick={handleOrderClick}>
            Order Ingredients
          </button>

          <h4 className="mt-4">Recipe Instructions</h4>
          <div className="recipe-steps">
            <p>Wash and soak the rice and lentils.</p>
            <p>Cook lentils with spices until soft.</p>
            <p>Cook rice separately until fluffy.</p>
            <p>Serve dal with rice, garnished with coriander.</p>
          </div>
        </div>
        <div className="tips-hints-box">
            <h5>Tips and Hints</h5>
            <p>Hints: Soaking the dal for a few hours helps in cooking it faster and makes it softer.
            Tips: Add a tempering of cumin seeds and garlic for enhanced flavor just before serving.</p>
            </div>

          <div>Recipe created by</div>
      </div>
    </div>
  );
}

export default DalChawal;

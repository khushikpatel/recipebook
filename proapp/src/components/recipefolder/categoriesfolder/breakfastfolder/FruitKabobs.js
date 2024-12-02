import React from 'react';
import { useNavigate } from 'react-router-dom';
import './familydinners.css';

function FruitKabobs() {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/order-ingredients');
  };

  return (
    <div className="container mt-5 recipe-details-page">
      <div className="row">
        <div className="col-md-6">
          <img
            src={require('../images/FruitKabobs.jpeg')}
            alt="Fruit Kabobs"
            className="img-fluid shadow-lg"
          />
          <div className="info-box mt-3 p-3 shadow-sm">
            <p><strong>Serving Size:</strong> 6 people</p>
            <p><strong>Prep Time:</strong> 15 minutes</p>
            <p><strong>Nutritions:</strong> 80 Calories</p>
          </div>
        </div>

        <div className="col-md-6">
          <h4>Ingredients</h4>
          <div className="ingredients-list">
            <p>1 cup strawberries, halved</p>
            <p>1 cup pineapple chunks</p>
            <p>1 cup grapes</p>
            <p>1 cup blueberries</p>
            <p>Wooden skewers</p>
          </div>

          <button className="btn btn-primary mt-3" onClick={handleOrderClick}>
            Order Ingredients
          </button>

          <h4 className="mt-4">Recipe Instructions</h4>
          <div className="recipe-steps">
            <p>Thread the fruit onto skewers, alternating between types.</p>
            <p>Serve fresh or chill in the refrigerator before serving.</p>
          </div>

          <div className="tips-hints-box">
            <h5>Tips and Hints</h5>
            <p>Use seasonal fruits for variety.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FruitKabobs;

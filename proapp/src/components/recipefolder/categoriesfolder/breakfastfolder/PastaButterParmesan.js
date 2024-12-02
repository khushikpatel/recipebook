import React from 'react';
import { useNavigate } from 'react-router-dom';
import './familydinners.css';

function PastaButterParmesan() {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/order-ingredients');
  };

  return (
    <div className="container mt-5 recipe-details-page">
      <div className="row">
        <div className="col-md-6">
          <img
            src={require('../images/PastaButterParmesan.jpeg')}
            alt="Pasta with Butter and Parmesan"
            className="img-fluid shadow-lg"
          />
          <div className="info-box mt-3 p-3 shadow-sm">
            <p><strong>Serving Size:</strong> 4 people</p>
            <p><strong>Prep Time:</strong> 5 minutes</p>
            <p><strong>Cooking Time:</strong> 10 minutes</p>
            <p><strong>Nutritions:</strong> 320 Calories</p>
          </div>
        </div>

        <div className="col-md-6">
          <h4>Ingredients</h4>
          <div className="ingredients-list">
            <p>1 lb pasta</p>
            <p>4 tbsp butter</p>
            <p>1 cup grated Parmesan cheese</p>
            <p>Salt and pepper to taste</p>
          </div>

          <button className="btn btn-primary mt-3" onClick={handleOrderClick}>
            Order Ingredients
          </button>

          <h4 className="mt-4">Recipe Instructions</h4>
          <div className="recipe-steps">
            <p>Cook the pasta according to package instructions.</p>
            <p>Drain and return to the pot.</p>
            <p>Add butter and Parmesan cheese, stirring until melted.</p>
            <p>Season with salt and pepper to taste.</p>
          </div>

          <div className="tips-hints-box">
            <h5>Tips and Hints</h5>
            <p>Add a sprinkle of parsley for extra flavor.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PastaButterParmesan;

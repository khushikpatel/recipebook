import React from 'react';
import { useNavigate } from 'react-router-dom';
import './familydinners.css'; // Ensure the custom CSS path is correct

function VegetableStirFry() {
  const navigate = useNavigate(); 

  const handleOrderClick = () => {
    navigate('/order-ingredients');
  };

  return (
    <div className="container mt-5 recipe-details-page">
      <div className="row">
        <div className="col-md-6">
          <img
            src={require('../images/Vegetable Stir-Fry.jpeg')} // Image path for Vegetable Stir-Fry
            alt="Vegetable Stir-Fry"
            className="img-fluid shadow-lg"
          />
          <div className="info-box mt-3 p-3 shadow-sm">
            <p><strong>Serving Size:</strong> 4 people</p>
            <p><strong>Prep Time:</strong> 10 minutes</p>
            <p><strong>Cooking Time:</strong> 15 minutes</p>
            <p><strong>Nutritions:</strong> 200 Calories</p>
          </div>
        </div>

        <div className="col-md-6">
          <h4>Ingredients</h4>
          <div className="ingredients-list">
            <p>2 cups mixed vegetables (broccoli, bell peppers, carrots)</p>
            <p>2 tablespoons soy sauce</p>
            <p>1 tablespoon olive oil</p>
            <p>1 teaspoon garlic, minced</p>
            <p>Salt and pepper to taste</p>
            <p>Cooked rice or noodles for serving</p>
          </div>

          <button className="btn btn-primary mt-3" onClick={handleOrderClick}>
            Order Ingredients
          </button>

          <h4 className="mt-4">Recipe Instructions</h4>
          <div className="recipe-steps">
            <p>Heat olive oil in a pan over medium heat.</p>
            <p>Add garlic and sauté for 30 seconds.</p>
            <p>Add mixed vegetables and stir-fry for 5-7 minutes.</p>
            <p>Add soy sauce, salt, and pepper, stir well, and cook for an additional 2 minutes.</p>
            <p>Serve over rice or noodles.</p>
          </div>

          <div className="tips-hints-box">
            <h5>Tips and Hints</h5>
            <p>Feel free to add your favorite protein like tofu or chicken.</p>
          </div>
          <div>Recipe created by</div>
        </div>
      </div>
    </div>
  );
}

export default VegetableStirFry;

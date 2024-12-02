import React from 'react';
import { useNavigate } from 'react-router-dom';
import './familydinners.css'; // Ensure the custom CSS path is correct

function StuffedPeppers() {
  const navigate = useNavigate(); 

  const handleOrderClick = () => {
    navigate('/order-ingredients');
  };

  return (
    <div className="container mt-5 recipe-details-page">
      <div className="row">
        <div className="col-md-6">
          <img
            src={require('../images/Stuffed Peppers.jpeg')} // Image path for Stuffed Peppers
            alt="Stuffed Peppers"
            className="img-fluid shadow-lg"
          />
          <div className="info-box mt-3 p-3 shadow-sm">
            <p><strong>Serving Size:</strong> 4 people</p>
            <p><strong>Prep Time:</strong> 15 minutes</p>
            <p><strong>Cooking Time:</strong> 30 minutes</p>
            <p><strong>Nutritions:</strong> 350 Calories</p>
          </div>
        </div>

        <div className="col-md-6">
          <h4>Ingredients</h4>
          <div className="ingredients-list">
            <p>4 bell peppers, halved and seeded</p>
            <p>1 lb ground turkey</p>
            <p>1 cup cooked rice</p>
            <p>1 can diced tomatoes</p>
            <p>1 teaspoon Italian seasoning</p>
            <p>Salt and pepper to taste</p>
            <p>Cheese for topping (optional)</p>
          </div>

          <button className="btn btn-primary mt-3" onClick={handleOrderClick}>
            Order Ingredients
          </button>

          <h4 className="mt-4">Recipe Instructions</h4>
          <div className="recipe-steps">
            <p>Preheat oven to 375°F (190°C).</p>
            <p>In a skillet, cook ground turkey until browned, then add rice, tomatoes, and seasoning.</p>
            <p>Stuff pepper halves with the mixture and place in a baking dish.</p>
            <p>Top with cheese if desired, then bake for 25 minutes.</p>
          </div>

          <div className="tips-hints-box">
            <h5>Tips and Hints</h5>
            <p>Use quinoa instead of rice for a healthier option.</p>
          </div>
          <div>Recipe created by</div>
        </div>
      </div>
    </div>
  );
}

export default StuffedPeppers;

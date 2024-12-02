import React from 'react';
import { useNavigate } from 'react-router-dom';
import './familydinners.css'; // Ensure the custom CSS path is correct

function SpaghettiAndMeatballs() {
  const navigate = useNavigate(); 

  const handleOrderClick = () => {
    navigate('/order-ingredients');
  };

  return (
    <div className="container mt-5 recipe-details-page">
      <div className="row">
        <div className="col-md-6">
          <img
            src={require('../images/Spaghetti and Meatballs.jpg')} // Image path for Spaghetti and Meatballs
            alt="Spaghetti and Meatballs"
            className="img-fluid shadow-lg"
          />
          <div className="info-box mt-3 p-3 shadow-sm">
            <p><strong>Serving Size:</strong> 4 people</p>
            <p><strong>Prep Time:</strong> 20 minutes</p>
            <p><strong>Cooking Time:</strong> 30 minutes</p>
            <p><strong>Nutritions:</strong> 600 Calories</p>
          </div>
        </div>

        <div className="col-md-6">
          <h4>Ingredients</h4>
          <div className="ingredients-list">
            <p>1 lb spaghetti</p>
            <p>1 lb ground beef</p>
            <p>1/2 cup breadcrumbs</p>
            <p>1/4 cup grated Parmesan cheese</p>
            <p>1 egg</p>
            <p>2 cups marinara sauce</p>
            <p>Salt and pepper to taste</p>
            <p>Basil for garnish</p>
          </div>

          <button className="btn btn-primary mt-3" onClick={handleOrderClick}>
            Order Ingredients
          </button>

          <h4 className="mt-4">Recipe Instructions</h4>
          <div className="recipe-steps">
            <p>Cook spaghetti according to package instructions.</p>
            <p>In a bowl, combine ground beef, breadcrumbs, Parmesan, egg, salt, and pepper.</p>
            <p>Form mixture into meatballs and brown them in a skillet.</p>
            <p>Add marinara sauce and simmer for 10 minutes.</p>
            <p>Serve meatballs over spaghetti and garnish with basil.</p>
          </div>

          <div className="tips-hints-box">
            <h5>Tips and Hints</h5>
            <p>For extra flavor, add garlic and herbs to the meat mixture.</p>
          </div>
          <div>Recipe created by</div>
        </div>
      </div>
    </div>
  );
}

export default SpaghettiAndMeatballs;

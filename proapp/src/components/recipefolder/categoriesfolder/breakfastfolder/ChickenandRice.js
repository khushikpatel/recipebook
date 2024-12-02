import React from 'react';
import { useNavigate } from 'react-router-dom';
import './familydinners.css'; // Ensure the custom CSS path is correct

function BakedChickenAndRice() {
  const navigate = useNavigate(); 

  const handleOrderClick = () => {
    navigate('/order-ingredients');
  };

  return (
    <div className="container mt-5 recipe-details-page">
      <div className="row">
        <div className="col-md-6">
          <img
            src={require('../images/Baked Chicken and Rice.jpeg')} // Image path for Baked Chicken and Rice
            alt="Baked Chicken and Rice"
            className="img-fluid shadow-lg"
          />
          <div className="info-box mt-3 p-3 shadow-sm">
            <p><strong>Serving Size:</strong> 4 people</p>
            <p><strong>Prep Time:</strong> 15 minutes</p>
            <p><strong>Cooking Time:</strong> 1 hour</p>
            <p><strong>Nutritions:</strong> 500 Calories</p>
          </div>
        </div>

        <div className="col-md-6">
          <h4>Ingredients</h4>
          <div className="ingredients-list">
            <p>4 chicken thighs</p>
            <p>1 cup rice</p>
            <p>2 cups chicken broth</p>
            <p>1 onion, chopped</p>
            <p>1 teaspoon garlic powder</p>
            <p>Salt and pepper to taste</p>
            <p>Parsley for garnish</p>
          </div>

          <button className="btn btn-primary mt-3" onClick={handleOrderClick}>
            Order Ingredients
          </button>

          <h4 className="mt-4">Recipe Instructions</h4>
          <div className="recipe-steps">
            <p>Preheat oven to 375°F (190°C).</p>
            <p>In a baking dish, combine rice, broth, onion, garlic powder, salt, and pepper.</p>
            <p>Place chicken thighs on top and cover with foil.</p>
            <p>Bake for 45 minutes, then uncover and bake for an additional 15 minutes.</p>
            <p>Garnish with parsley before serving.</p>
          </div>

          <div className="tips-hints-box">
            <h5>Tips and Hints</h5>
            <p>Use brown rice for added fiber and nutrition.</p>
          </div>
          <div>Recipe created by</div>
        </div>
      </div>
    </div>
  );
}

export default BakedChickenAndRice;

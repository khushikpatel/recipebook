import React from 'react';
import { useNavigate } from 'react-router-dom';
import './breakfast.css'; // Ensure the custom CSS path is correct

function Sandwich() {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/order-ingredients');
  };

  return (
    <div className="container mt-5 pancake-details-page">
      <div className="row">
        {/* Image section */}
        <div className="col-md-6">
          <img
            src={require('../images/sandwich.webp')} // Change to the correct sandwich image path
            alt="Sandwich"
            className="img-fluid shadow-lg"
          />
          {/* Box for serving info, prep time, cook time, and nutrition */}
          <div className="info-box mt-3 p-3 shadow-sm">
            <p><strong>Serving Size:</strong> 2 sandwiches</p>
            <p><strong>Prep Time:</strong> 10 minutes</p>
            <p><strong>Cooking Time:</strong> 5 minutes</p>
            <p><strong>Nutritions:</strong> 300 Calories (per sandwich)</p>
          </div>
        </div>

        {/* Recipe details section */}
        <div className="col-md-6">
          <h4>Ingredients</h4>
          <div className="ingredients-list">
            <p>4 slices of bread (whole grain or your choice)</p>
            <p>2 Tbsp. mayonnaise</p>
            <p>1 Tbsp. mustard</p>
            <p>1 cup lettuce leaves</p>
            <p>1 tomato (sliced)</p>
            <p>1/2 cucumber (sliced)</p>
            <p>4 slices of cheese (cheddar or your choice)</p>
            <p>1/2 avocado (sliced, optional)</p>
            <p>Salt and pepper to taste</p>
            <p>Butter for grilling (optional)</p>
          </div>

          {/* Button to order ingredients */}
          <button className="btn btn-primary mt-3" onClick={handleOrderClick}>
            Order Ingredients
          </button>

          <h4 className="mt-4">Recipe Instructions</h4>
          <div className="recipe-steps">
            <p>Spread mayonnaise and mustard on two slices of bread.</p>
            <p>Layer with lettuce, tomato, cucumber, cheese, and avocado.</p>
            <p>Top with the remaining slices of bread.</p>
            <p>If desired, butter the outside of the sandwich for grilling.</p>
            <p>Heat a non-stick skillet over medium heat and grill the sandwiches until golden brown on both sides.</p>
            <p>Remove from the skillet, slice in half, and serve warm.</p>
          </div>

          <div className="tips-hints-box">
            <h5>Tips and Hints</h5>
            <p>Add your favorite protein, like turkey or ham, for extra flavor.</p>
            <p>Experiment with different cheeses and spreads for variety.</p>
          </div>
          <div>Recipe created by</div>
        </div>
      </div>
    </div>
  );
}

export default Sandwich;

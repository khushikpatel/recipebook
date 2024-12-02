import React from 'react';
import { useNavigate } from 'react-router-dom';
import './breakfast.css'; // Ensure the custom CSS path is correct

function Pohe() {
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
            src={require('../images/Poha.webp')} // Ensure the correct image path
            alt="Pohe"
            className="img-fluid shadow-lg"
          />
          <div className="info-box mt-3 p-3 shadow-sm">
            <p><strong>Serving Size:</strong> 2 people</p>
            <p><strong>Prep Time:</strong> 10 minutes</p>
            <p><strong>Cooking Time:</strong> 15 minutes</p>
            <p><strong>Nutritions:</strong> 300 Calories</p>
          </div>
        </div>

        {/* Recipe details section */}
        <div className="col-md-6">
          <h4>Ingredients</h4>
          <div className="ingredients-list">
            <p>2 cups flattened rice (poha)</p>
            <p>1 medium onion, chopped</p>
            <p>1 green chili, chopped</p>
            <p>1 tsp mustard seeds</p>
            <p>1/4 tsp turmeric powder</p>
            <p>Salt to taste</p>
            <p>1/4 cup peanuts</p>
            <p>2 tbsp oil</p>
            <p>Fresh coriander for garnish</p>
            <p>1 lemon, juiced</p>
          </div>

          {/* Button to order ingredients */}
          <button className="btn btn-primary mt-3" onClick={handleOrderClick}>
            Order Ingredients
          </button>

          <h4 className="mt-6">Recipe Instructions</h4>
          <div className="recipe-steps">
            <p><strong>Step 1:</strong> Rinse poha in water and drain.</p>
            <p><strong>Step 2:</strong> Heat oil in a pan, add mustard seeds, and let them splutter.</p>
            <p><strong>Step 3:</strong> Add onions and green chili; sauté until onions are translucent.</p>
            <p><strong>Step 4:</strong> Add turmeric, salt, and peanuts; mix well.</p>
            <p><strong>Step 5:</strong> Add the drained poha; mix gently and cook for 5 minutes.</p>
            <p><strong>Step 6:</strong> Garnish with coriander and lemon juice before serving.</p>
          </div>
        </div>
        <div>
        <h5>Tips and Hints</h5>
            <p>Hints: Use thick poha (flattened rice) for the best texture. Rinse it lightly before cooking to prevent it from becoming mushy.</p>
            <p>Tips: Garnish with fresh coriander and a squeeze of lemon for added freshness. Serve with a side of yogurt for a complete meal.</p>
          </div>
          <div>Recipe created by</div>
      </div>
    </div>
  );
}

export default Pohe;

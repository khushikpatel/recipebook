import React from 'react';
import { useNavigate } from 'react-router-dom';
import './breakfast.css'; // Ensure the custom CSS path is correct

function RavaIdli() {
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
            src={require('../images/idli.webp')} // Change to the correct Rava Idli image path
            alt="Rava Idli"
            className="img-fluid shadow-lg"
          />
          {/* Box for serving info, prep time, cook time, and nutrition */}
          <div className="info-box mt-3 p-3 shadow-sm">
            <p><strong>Serving Size:</strong> 4 people</p>
            <p><strong>Prep Time:</strong> 15 minutes</p>
            <p><strong>Cooking Time:</strong> 15 minutes</p>
            <p><strong>Nutritions:</strong> 200 Calories</p>
          </div>
        </div>

        {/* Recipe details section */}
        <div className="col-md-6">
          <h4>Ingredients</h4>
          <div className="ingredients-list">
            <p>1 cup semolina (rava)</p>
            <p>1/2 cup yogurt</p>
            <p>1/2 cup water</p>
            <p>1/4 tsp baking soda</p>
            <p>1/2 tsp salt</p>
            <p>1/4 cup finely chopped carrots</p>
            <p>1/4 cup finely chopped beans</p>
            <p>2 green chilies (finely chopped)</p>
            <p>1 tsp mustard seeds</p>
            <p>1 tsp cumin seeds</p>
            <p>2 Tbsp. oil (for tempering)</p>
            <p>Coriander leaves (for garnish)</p>
          </div>

          {/* Button to order ingredients */}
          <button className="btn btn-primary mt-3" onClick={handleOrderClick}>
            Order Ingredients
          </button>

          <h4 className="mt-4">Recipe Instructions</h4>
          <div className="recipe-steps">
            <p>In a mixing bowl, combine semolina, yogurt, and water. Let it rest for 10 minutes.</p>
            <p>Add baking soda and salt to the mixture. Stir well.</p>
            <p>Heat oil in a pan, add mustard seeds, and let them splutter. Then add cumin seeds, green chilies, and chopped vegetables. Sauté for a few minutes.</p>
            <p>Mix the tempering into the idli batter.</p>
            <p>Grease the idli molds and pour the batter into them.</p>
            <p>Steam the idlis for about 10-15 minutes until cooked through.</p>
            <p>Serve hot with coconut chutney and sambar.</p>
          </div>

          <div className="tips-hints-box">
            <h5>Tips and Hints</h5>
            <p>Let the batter rest for better fermentation and fluffiness.</p>
            <p>You can add chopped nuts for extra flavor and nutrition.</p>
          </div>
          <div>Recipe created by</div>
        </div>
      </div>
    </div>
  );
}

export default RavaIdli;

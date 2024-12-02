import React from 'react';
import { useNavigate } from 'react-router-dom';
import './breakfast.css';

function Pancakes() {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/order-ingredients');
  };

  return (
    <div className="container mt-5 pancake-details-page">
      <div className="row">
        <div className="col-md-6">
          <img src={require('../images/pancake.webp')} alt="Pancakes" className="img-fluid shadow-lg" />
          <div className="info-box mt-3 p-3 shadow-sm">
            <p><strong>Serving Size:</strong> 4 pancakes</p>
            <p><strong>Prep Time:</strong> 10 minutes</p>
            <p><strong>Cooking Time:</strong> 15 minutes</p>
            <p><strong>Nutritions:</strong> 200 Calories (per pancake)</p>
          </div>
        </div>

        <div className="col-md-6">
          <h4>Ingredients</h4>
          <div className="ingredients-list">
            <p>1 cup all-purpose flour</p>
            <p>2 Tbsp sugar</p>
            <p>1 tsp baking powder</p>
            <p>1/2 tsp baking soda</p>
            <p>1/4 tsp salt</p>
            <p>1 cup buttermilk</p>
            <p>1 large egg</p>
            <p>2 Tbsp melted butter</p>
          </div>

          <button className="btn btn-primary mt-3" onClick={handleOrderClick}>
            Order Ingredients
          </button>

          <h4 className="mt-4">Recipe Instructions</h4>
          <div className="recipe-steps">
            <p>In a bowl, whisk together flour, sugar, baking powder, baking soda, and salt.</p>
            <p>In another bowl, whisk the buttermilk, egg, and melted butter.</p>
            <p>Combine wet and dry ingredients; mix until just combined.</p>
            <p>Heat a skillet, pour batter, and cook until bubbles appear. Flip and cook until golden brown.</p>
            <p>Serve with maple syrup and fresh berries.</p>
          </div>
        </div>
        <div className="tips-hints-box">
            <h5>Tips and Hints</h5>
            <p>For fluffier pancakes, let the batter rest for 5 minutes before cooking.</p>
            <p>Use a non-stick skillet for best results. Add a small amount of butter or oil if needed.</p>
          </div>

          <div>Recipe created by</div>
      </div>
    </div>
  );
}

export default Pancakes;

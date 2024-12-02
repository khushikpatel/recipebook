import React from 'react';
import { useNavigate } from 'react-router-dom';
import './breakfast.css';

function BlueberryBread() {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/order-ingredients');
  };

  return (
    <div className="container mt-5 pancake-details-page">
      <div className="row">
        <div className="col-md-6">
          <img src={require('../images/lemonbluberry.webp')} alt="Blueberry Bread" className="img-fluid shadow-lg" />
          <div className="info-box mt-3 p-3 shadow-sm">
            <p><strong>Serving Size:</strong> 8 slices</p>
            <p><strong>Prep Time:</strong> 15 minutes</p>
            <p><strong>Cooking Time:</strong> 60 minutes</p>
            <p><strong>Nutritions:</strong> 200 Calories (per slice)</p>
          </div>
        </div>

        <div className="col-md-6">
          <h4>Ingredients</h4>
          <div className="ingredients-list">
            <p>1 1/2 cups all-purpose flour</p>
            <p>1 tsp baking powder</p>
            <p>1/2 tsp salt</p>
            <p>1/2 cup sugar</p>
            <p>1/2 cup butter (softened)</p>
            <p>2 eggs</p>
            <p>1 cup blueberries</p>
            <p>1 tsp vanilla extract</p>
          </div>

          <button className="btn btn-primary mt-3" onClick={handleOrderClick}>
            Order Ingredients
          </button>

          <h4 className="mt-4">Recipe Instructions</h4>
          <div className="recipe-steps">
            <p>Preheat oven to 350°F (175°C).</p>
            <p>Mix flour, baking powder, and salt in a bowl.</p>
            <p>In another bowl, cream sugar and butter, then add eggs and vanilla.</p>
            <p>Gradually mix in the dry ingredients, then fold in blueberries.</p>
            <p>Pour into a greased loaf pan and bake for 55-60 minutes.</p>
          </div>
        </div>
        <div className="tips-hints-box">
            <h5>Tips and Hints</h5>
            <p>Hints: Toss blueberries in flour before adding them to the batter to prevent them from sinking.
            Tips: Use buttermilk for a lighter, fluffier bread.</p></div>

          <div>Recipe created by</div>
      </div>
    </div>
  );
}

export default BlueberryBread;

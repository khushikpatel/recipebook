import React from 'react';
import { useNavigate } from 'react-router-dom';
import './breakfast.css';

function FudgyBrownies() {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/order-ingredients');
  };

  return (
    <div className="container mt-5 pancake-details-page">
      <div className="row">
        <div className="col-md-6">
          <img src={require('../images/Fudgy Brownies.webp')} alt="Fudgy Brownies" className="img-fluid shadow-lg" />
          <div className="info-box mt-3 p-3 shadow-sm">
            <p><strong>Serving Size:</strong> 8 pieces</p>
            <p><strong>Prep Time:</strong> 15 minutes</p>
            <p><strong>Cooking Time:</strong> 25 minutes</p>
            <p><strong>Nutritions:</strong> 200 Calories (per piece)</p>
          </div>
        </div>

        <div className="col-md-6">
          <h4>Ingredients</h4>
          <div className="ingredients-list">
            <p>1/2 cup butter</p>
            <p>1 cup sugar</p>
            <p>2 large eggs</p>
            <p>1 tsp vanilla extract</p>
            <p>1/3 cup cocoa powder</p>
            <p>1 cup all-purpose flour</p>
            <p>1/4 tsp salt</p>
            <p>1/4 tsp baking powder</p>
          </div>

          <button className="btn btn-primary mt-3" onClick={handleOrderClick}>
            Order Ingredients
          </button>

          <h4 className="mt-4">Recipe Instructions</h4>
          <div className="recipe-steps">
            <p>Preheat oven to 350°F (175°C).</p>
            <p>Melt butter, then mix in sugar, eggs, and vanilla.</p>
            <p>Add cocoa, flour, salt, and baking powder; mix well.</p>
            <p>Pour into a greased pan and bake for 20-25 minutes.</p>
            <p>Let cool before cutting into squares.</p>
          </div>
        </div>
        <div>
        <h5>Tips and Hints</h5>
            <p>Hints: Use high-quality chocolate for a richer flavor. Don’t overbake for the fudgy texture.</p>
            <p> Tips: Add nuts or chocolate chips for extra texture and flavor..</p>
           </div>
          <div>Recipe created by</div>
      </div>
    </div>
  );
}

export default FudgyBrownies;

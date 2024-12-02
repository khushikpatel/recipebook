import React from 'react';
import { useNavigate } from 'react-router-dom';
import './breakfast.css';

function CrustalCheesecake() {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/order-ingredients');
  };

  return (
    <div className="container mt-5 pancake-details-page">
      <div className="row">
        <div className="col-md-6">
          <img src={require('../images/crustule chesse cake.webp')} alt="Crustal Cheesecake" className="img-fluid shadow-lg" />
          <div className="info-box mt-3 p-3 shadow-sm">
            <p><strong>Serving Size:</strong> 8 slices</p>
            <p><strong>Prep Time:</strong> 20 minutes</p>
            <p><strong>Cooking Time:</strong> 60 minutes</p>
            <p><strong>Nutritions:</strong> 300 Calories (per slice)</p>
          </div>
        </div>

        <div className="col-md-6">
          <h4>Ingredients</h4>
          <div className="ingredients-list">
            <p>1 1/2 cups graham cracker crumbs</p>
            <p>1/3 cup sugar</p>
            <p>1/2 cup butter (melted)</p>
            <p>3 (8 oz) packages cream cheese</p>
            <p>1 cup sugar</p>
            <p>1 tsp vanilla extract</p>
            <p>3 large eggs</p>
          </div>

          <button className="btn btn-primary mt-3" onClick={handleOrderClick}>
            Order Ingredients
          </button>

          <h4 className="mt-4">Recipe Instructions</h4>
          <div className="recipe-steps">
            <p>Preheat oven to 325°F (160°C).</p>
            <p>Mix graham cracker crumbs, sugar, and melted butter; press into the bottom of a springform pan.</p>
            <p>Beat cream cheese until smooth; add sugar and vanilla, mixing well.</p>
            <p>Add eggs one at a time, mixing after each addition.</p>
            <p>Pour into crust and bake for 55-60 minutes. Cool and refrigerate before serving.</p>
          </div>
        </div>
        <div>
        <h5>Tips and Hints</h5>
            <p>Hints: Ensure all ingredients are at room temperature for a smooth batter.</p>
           <p>Tips: Chill the cheesecake overnight for the best texture and flavor. Serve with a fruit topping or sauce.</p>
            </div>
          <div>Recipe created by</div>
      </div>
    </div>
  );
}

export default CrustalCheesecake;

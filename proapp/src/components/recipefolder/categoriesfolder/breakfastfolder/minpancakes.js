import React from 'react';
import { useNavigate } from 'react-router-dom';
import './familydinners.css';

function MiniPancakes() {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/order-ingredients');
  };

  return (
    <div className="container mt-5 recipe-details-page">
      <div className="row">
        <div className="col-md-6">
          <img
            src={require('../images/minipancakes.jpg')} // Image path for Mini Pancakes
            alt="Mini Pancakes"
            className="img-fluid shadow-lg"
          />
          <div className="info-box mt-3 p-3 shadow-sm">
            <p><strong>Serving Size:</strong> 4 people</p>
            <p><strong>Prep Time:</strong> 10 minutes</p>
            <p><strong>Cooking Time:</strong> 10 minutes</p>
            <p><strong>Nutritions:</strong> 150 Calories per serving</p>
          </div>
        </div>

        <div className="col-md-6">
          <h4>Ingredients</h4>
          <div className="ingredients-list">
            <p>1 cup all-purpose flour</p>
            <p>1 tablespoon sugar</p>
            <p>1 teaspoon baking powder</p>
            <p>1/2 teaspoon baking soda</p>
            <p>1/4 teaspoon salt</p>
            <p>3/4 cup milk</p>
            <p>1 egg</p>
            <p>1 tablespoon melted butter</p>
            <p>Butter or oil for cooking</p>
          </div>

          <button className="btn btn-primary mt-3" onClick={handleOrderClick}>
            Order Ingredients
          </button>

          <h4 className="mt-4">Recipe Instructions</h4>
          <div className="recipe-steps">
            <p>In a bowl, whisk together flour, sugar, baking powder, baking soda, and salt.</p>
            <p>In another bowl, mix milk, egg, and melted butter.</p>
            <p>Combine the wet and dry ingredients, stirring until just combined.</p>
            <p>Heat a non-stick skillet over medium heat and grease with butter or oil.</p>
            <p>Drop small spoonfuls of batter onto the skillet, making mini pancakes.</p>
            <p>Cook until bubbles form on the surface, then flip and cook until golden brown.</p>
          </div>

          <div className="tips-hints-box">
            <h5>Tips and Hints</h5>
            <p>Top with fresh fruit, syrup, or a dusting of powdered sugar for extra flavor.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniPancakes;

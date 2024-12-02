import React from 'react';
import { useNavigate } from 'react-router-dom';
import './familydinners.css'; // Ensure the custom CSS path is correct

function PizzaBagels() {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/order-ingredients');
  };

  return (
    <div className="container mt-5 recipe-details-page">
      <div className="row">
        <div className="col-md-6">
          <img
            src={require('../images/PizzaBagels.jpg')}
            alt="Pizza Bagels"
            className="img-fluid shadow-lg"
          />
          <div className="info-box mt-3 p-3 shadow-sm">
            <p><strong>Serving Size:</strong> 2 people</p>
            <p><strong>Prep Time:</strong> 10 minutes</p>
            <p><strong>Cooking Time:</strong> 10 minutes</p>
            <p><strong>Nutritions:</strong> 250 Calories</p>
          </div>
        </div>

        <div className="col-md-6">
          <h4>Ingredients</h4>
          <div className="ingredients-list">
            <p>4 mini bagels</p>
            <p>1/2 cup marinara sauce</p>
            <p>1 cup shredded mozzarella cheese</p>
            <p>1/2 cup pepperoni slices</p>
            <p>Oregano for seasoning</p>
          </div>

          <button className="btn btn-primary mt-3" onClick={handleOrderClick}>
            Order Ingredients
          </button>

          <h4 className="mt-4">Recipe Instructions</h4>
          <div className="recipe-steps">
            <p>Preheat oven to 375°F (190°C).</p>
            <p>Spread marinara sauce over each bagel.</p>
            <p>Top with cheese and pepperoni.</p>
            <p>Bake for 10 minutes or until the cheese is melted.</p>
          </div>

          <div className="tips-hints-box">
            <h5>Tips and Hints</h5>
            <p>Add veggies like bell peppers or olives for a healthier option.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PizzaBagels;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './familydinners.css';

function BroccoliRiceCasserole() {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/order-ingredients');
  };

  return (
    <div className="container mt-5 recipe-details-page">
      <div className="row">
        <div className="col-md-6">
          <img
            src={require('../images/BroccoliRiceCasserole.jpg')} // Image path for Broccoli Rice Casserole
            alt="Broccoli Rice Casserole"
            className="img-fluid shadow-lg"
          />
          <div className="info-box mt-3 p-3 shadow-sm">
            <p><strong>Serving Size:</strong> 6 people</p>
            <p><strong>Prep Time:</strong> 10 minutes</p>
            <p><strong>Cooking Time:</strong> 30 minutes</p>
            <p><strong>Nutritions:</strong> 200 Calories</p>
          </div>
        </div>

        <div className="col-md-6">
          <h4>Ingredients</h4>
          <div className="ingredients-list">
            <p>2 cups cooked rice</p>
            <p>2 cups steamed broccoli</p>
            <p>1 cup shredded cheddar cheese</p>
            <p>1 can condensed cream of mushroom soup</p>
            <p>1/2 cup milk</p>
            <p>1 teaspoon garlic powder</p>
            <p>Salt and pepper to taste</p>
          </div>

          <button className="btn btn-primary mt-3" onClick={handleOrderClick}>
            Order Ingredients
          </button>

          <h4 className="mt-4">Recipe Instructions</h4>
          <div className="recipe-steps">
            <p>Preheat oven to 350°F (175°C).</p>
            <p>In a large bowl, mix the rice, broccoli, soup, milk, and garlic powder.</p>
            <p>Add salt and pepper to taste, and stir in half of the shredded cheese.</p>
            <p>Transfer the mixture to a greased baking dish, top with the remaining cheese.</p>
            <p>Bake for 25 minutes, or until the cheese is melted and bubbly.</p>
          </div>

          <div className="tips-hints-box">
            <h5>Tips and Hints</h5>
            <p>Add cooked chicken or turkey for a complete meal.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BroccoliRiceCasserole;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './breakfast.css';

function RajmaChawal() {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/order-ingredients');
  };

  return (
    <div className="container mt-5 pancake-details-page">
      <div className="row">
        <div className="col-md-6">
          <img src={require('../images/rajma chwal.jpg')} alt="Rajma Chawal" className="img-fluid shadow-lg" />
          <div className="info-box mt-3 p-3 shadow-sm">
            <p><strong>Serving Size:</strong> 2 people</p>
            <p><strong>Prep Time:</strong> 15 minutes</p>
            <p><strong>Cooking Time:</strong> 30 minutes</p>
            <p><strong>Nutritions:</strong> 400 Calories</p>
          </div>
        </div>

        <div className="col-md-6">
          <h4>Ingredients</h4>
          <div className="ingredients-list">
            <p>1 cup kidney beans (rajma)</p>
            <p>1 cup rice</p>
            <p>1 onion (chopped)</p>
            <p>2 tomatoes (pureed)</p>
            <p>Ginger-garlic paste</p>
            <p>Spices (cumin, coriander, garam masala)</p>
            <p>Salt to taste</p>
            <p>Oil for cooking</p>
          </div>

          <button className="btn btn-primary mt-3" onClick={handleOrderClick}>
            Order Ingredients
          </button>

          <h4 className="mt-4">Recipe Instructions</h4>
          <div className="recipe-steps">
            <p>Soak kidney beans overnight and boil until soft.</p>
            <p>In a pan, heat oil, sauté onions, add ginger-garlic paste.</p>
            <p>Add pureed tomatoes and spices; cook until oil separates.</p>
            <p>Add boiled rajma, cook for a few minutes.</p>
            <p>Serve with rice, garnished with coriander.</p>
          </div>
        </div>
        <div className="tips-hints-box">
            <h5>Tips and Hints</h5>
            <p>Hints: Let the batter rest for about 5-10 minutes for fluffier pancakes.</p>
            <p>Tips: Experiment with adding fruits like blueberries or bananas directly into the batter for a twist</p>
          </div>

          <div>Recipe created by</div>
      </div>
    </div>
  );
}

export default RajmaChawal;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './breakfast.css';

function PavBhaji() {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/order-ingredients');
  };

  return (
    <div className="container mt-5 pancake-details-page">
      <div className="row">
        <div className="col-md-6">
          <img src={require('../images/pav-bhaji.jpeg')} alt="Pav Bhaji" className="img-fluid shadow-lg" />
          <div className="info-box mt-3 p-3 shadow-sm">
            <p><strong>Serving Size:</strong> 2 people</p>
            <p><strong>Prep Time:</strong> 15 minutes</p>
            <p><strong>Cooking Time:</strong> 30 minutes</p>
            <p><strong>Nutritions:</strong> 350 Calories</p>
          </div>
        </div>

        <div className="col-md-6">
          <h4>Ingredients</h4>
          <div className="ingredients-list">
            <p>2 cups mixed vegetables (potato, peas, carrots)</p>
            <p>1 onion (chopped)</p>
            <p>2 tomatoes (chopped)</p>
            <p>2 green chilies (chopped)</p>
            <p>2 Tbsp pav bhaji masala</p>
            <p>Salt to taste</p>
            <p>4 pav buns</p>
            <p>Butter for serving</p>
            <p>Coriander leaves for garnish</p>
          </div>

          <button className="btn btn-primary mt-3" onClick={handleOrderClick}>
            Order Ingredients
          </button>

          <h4 className="mt-4">Recipe Instructions</h4>
          <div className="recipe-steps">
            <p>Boil and mash the mixed vegetables.</p>
            <p>In a pan, heat oil, add onions and chilies; sauté until golden.</p>
            <p>Add tomatoes, pav bhaji masala, and salt; cook until tomatoes soften.</p>
            <p>Add the mashed vegetables and mix well; cook for a few minutes.</p>
            <p>Serve with buttered pav buns and garnish with coriander leaves.</p>
          </div>
        </div>
        <div className="tips-hints-box">
            <h5>Tips and Hints</h5>
            <p>Hints: Mash the bhaji well for a smoother texture. Adjust the spice levels according to taste</p>
            <p>Tips: Serve with buttered pav and chopped onions on the side for a traditional touch.</p>
          </div>

          <div>Recipe created by</div>
      </div>
    </div>
  );
}

export default PavBhaji;

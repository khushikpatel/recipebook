import React from 'react';
import { useNavigate } from 'react-router-dom';
import './familydinners.css'; // Ensure the custom CSS path is correct

function BeefStew() {
  const navigate = useNavigate(); 

  const handleOrderClick = () => {
    navigate('/order-ingredients');
  };

  return (
    <div className="container mt-5 recipe-details-page">
      <div className="row">
        <div className="col-md-6">
          <img
            src={require('../images/beaf stew.jpeg')} // Image path for Beef Stew
            alt="Beef Stew"
            className="img-fluid shadow-lg"
          />
          <div className="info-box mt-3 p-3 shadow-sm">
            <p><strong>Serving Size:</strong> 6 people</p>
            <p><strong>Prep Time:</strong> 20 minutes</p>
            <p><strong>Cooking Time:</strong> 2 hours</p>
            <p><strong>Nutritions:</strong> 400 Calories</p>
          </div>
        </div>

        <div className="col-md-6">
          <h4>Ingredients</h4>
          <div className="ingredients-list">
            <p>2 lbs beef chuck, cubed</p>
            <p>4 carrots, sliced</p>
            <p>4 potatoes, diced</p>
            <p>1 onion, chopped</p>
            <p>4 cups beef broth</p>
            <p>2 tablespoons tomato paste</p>
            <p>Salt and pepper to taste</p>
          </div>

          <button className="btn btn-primary mt-3" onClick={handleOrderClick}>
            Order Ingredients
          </button>

          <h4 className="mt-4">Recipe Instructions</h4>
          <div className="recipe-steps">
            <p>In a large pot, brown beef over medium heat.</p>
            <p>Add onion, carrots, and potatoes, cooking for 5 minutes.</p>
            <p>Stir in beef broth and tomato paste, bringing to a boil.</p>
            <p>Reduce heat and simmer for 1.5 hours until beef is tender.</p>
          </div>

          <div className="tips-hints-box">
            <h5>Tips and Hints</h5>
            <p>Add herbs like thyme for extra flavor.</p>
          </div>
          <div>Recipe created by</div>
        </div>
      </div>
    </div>
  );
}

export default BeefStew;

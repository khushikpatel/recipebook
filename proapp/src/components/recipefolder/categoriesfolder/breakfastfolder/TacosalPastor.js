import React from 'react';
import { useNavigate } from 'react-router-dom';
import './mexican.css'; // Ensure the custom CSS path is correct

function TacosAlPastor() {
  const navigate = useNavigate(); 

  const handleOrderClick = () => {
    navigate('/order-ingredients');
  };

  return (
    <div className="container mt-5 recipe-details-page">
      <div className="row">
        <div className="col-md-6">
          <img
            src={require('../images/Tacos al Pastor.jpeg')} // Change to the correct image path
            alt="Tacos al Pastor"
            className="img-fluid shadow-lg"
          />
          <div className="info-box mt-3 p-3 shadow-sm">
            <p><strong>Serving Size:</strong> 4 people</p>
            <p><strong>Prep Time:</strong> 20 minutes</p>
            <p><strong>Cooking Time:</strong> 30 minutes</p>
            <p><strong>Nutritions:</strong> 350 Calories</p>
          </div>
        </div>

        <div className="col-md-6">
          <h4>Ingredients</h4>
          <div className="ingredients-list">
            <p>1 lb pork shoulder, sliced</p>
            <p>1/4 cup pineapple juice</p>
            <p>2 tablespoons adobo sauce</p>
            <p>1 tablespoon chili powder</p>
            <p>8 corn tortillas</p>
            <p>1 cup chopped onions</p>
            <p>1/2 cup chopped cilantro</p>
            <p>Lime wedges for serving</p>
          </div>

          <button className="btn btn-primary mt-3" onClick={handleOrderClick}>
            Order Ingredients
          </button>

          <h4 className="mt-4">Recipe Instructions</h4>
          <div className="recipe-steps">
            <p>Marinate the pork with pineapple juice, adobo sauce, chili powder, and seasonings for at least 30 minutes.</p>
            <p>Grill the marinated pork until fully cooked, about 20 minutes.</p>
            <p>Warm the corn tortillas on the grill or skillet.</p>
            <p>Assemble tacos with grilled pork, onions, and cilantro.</p>
            <p>Serve with lime wedges.</p>
          </div>

          <div className="tips-hints-box">
            <h5>Tips and Hints</h5>
            <p>For added flavor, top with avocado or salsa.</p>
          </div>
          <div>Recipe created by</div>
        </div>
      </div>
    </div>
  );
}

export default TacosAlPastor;

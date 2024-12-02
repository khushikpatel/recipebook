import React from 'react';
import { useNavigate } from 'react-router-dom';
import './breakfast.css'; // Ensure the custom CSS path is correct

function OnePotStuffedPepperCasserole() {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/order-ingredients');
  };

  return (
    <div className="container mt-5 recipe-details-page">
      <div className="row">
        {/* Image section */}
        <div className="col-md-6">
          <img
            src={require('../images/OnePotStuffedPepperCasserole.webp')} // Ensure the correct image path
            alt="One Pot Stuffed Pepper Casserole"
            className="img-fluid shadow-lg"
          />
          {/* Box for serving info, prep time, cook time, and nutrition */}
          <div className="info-box mt-3 p-3 shadow-sm">
            <p><strong>Serving Size:</strong> 6 people</p>
            <p><strong>Prep Time:</strong> 20 minutes</p>
            <p><strong>Cooking Time:</strong> 40 minutes</p>
            <p><strong>Nutritions:</strong> 390 Calories per serving</p>
          </div>
        </div>

        {/* Recipe details section */}
        <div className="col-md-6">
          <h4>Ingredients</h4>
          <div className="ingredients-list">
            <p>1 pound lean ground beef</p>
            <p>1 cup uncooked rice</p>
            <p>1 large onion, diced</p>
            <p>3 bell peppers, chopped</p>
            <p>3 cloves garlic, minced</p>
            <p>2 cups beef broth</p>
            <p>1 (15-ounce) can diced tomatoes</p>
            <p>1 (8-ounce) can tomato sauce</p>
            <p>1 teaspoon paprika</p>
            <p>1 teaspoon Italian seasoning</p>
            <p>Salt and pepper to taste</p>
            <p>Fresh parsley for garnish</p>
          </div>

          {/* Button to order ingredients */}
          <button className="btn btn-primary mt-3" onClick={handleOrderClick}>
            Order Ingredients
          </button>

          <h4 className="mt-6">Recipe Instructions</h4>
          <div className="recipe-steps">
            <p><strong>Step 1:</strong> In a large pot, brown the ground beef over medium heat until no longer pink. Drain excess fat.</p>
            <p><strong>Step 2:</strong> Add onions, garlic, and bell peppers to the pot. Cook until vegetables are softened.</p>
            <p><strong>Step 3:</strong> Stir in the uncooked rice, diced tomatoes, tomato sauce, beef broth, paprika, and Italian seasoning.</p>
            <p><strong>Step 4:</strong> Bring the mixture to a boil, then reduce heat and cover. Simmer for about 30 minutes, or until the rice is tender.</p>
            <p><strong>Step 5:</strong> Taste and adjust seasoning with salt and pepper. Garnish with fresh parsley before serving.</p>
          </div>

          <div className="tips-hints-box">
            <h5>Tips and Hints</h5>
            <p>If you want a spicier casserole, add a pinch of red pepper flakes.</p>
            <p>You can substitute ground turkey or chicken for the beef for a lighter option.</p>
          </div>

          <div>Recipe created by</div>
        </div>
      </div>
    </div>
  );
}

export default OnePotStuffedPepperCasserole;

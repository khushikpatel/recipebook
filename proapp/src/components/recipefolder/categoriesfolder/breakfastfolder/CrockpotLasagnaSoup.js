import React from 'react';
import { useNavigate } from 'react-router-dom';
import './breakfast.css'; // Ensure the custom CSS path is correct

function CrockpotLasagnaSoup() {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/order-ingredients');
  };

  return (
    <div className="container mt-5 pancake-details-page">
      <div className="row">
        {/* Image section */}
        <div className="col-md-6">
          <img
            src={require('../images/Crockpot Lasagna Soup.webp')} // Ensure the correct image path
            alt="Crockpot Lasagna Soup"
            className="img-fluid shadow-lg"
          />
          {/* Box for serving info, prep time, cook time, and nutrition */}
          <div className="info-box mt-3 p-3 shadow-sm">
            <p><strong>Serving Size:</strong> 6 people</p>
            <p><strong>Prep Time:</strong> 15 minutes</p>
            <p><strong>Cooking Time:</strong> 4-5 hours (slow cooker)</p>
            <p><strong>Nutritions:</strong> 450 Calories per serving</p>
          </div>
        </div>

        {/* Recipe details section */}
        <div className="col-md-6">
          <h4>Ingredients</h4>
          <div className="ingredients-list">
            <p>1 1/2 pounds 93/7 lean ground beef</p>
            <p>1 1/2 cups finely chopped yellow onion</p>
            <p>6 cloves garlic, finely chopped</p>
            <p>1 1/2 teaspoons table salt, divided</p>
            <p>3/4 teaspoon freshly ground black pepper, divided</p>
            <p>6 cups beef broth</p>
            <p>1 (24-ounce) jar marinara sauce (such as Rao's)</p>
            <p>1 (15-ounce) can diced tomatoes, drained</p>
            <p>1 (6-ounce) can basil, garlic, and oregano tomato paste</p>
            <p>1/4 teaspoon crushed red pepper, plus more for garnish</p>
            <p>8 ounces uncooked lasagna noodles, broken into pieces</p>
            <p>2 cups fresh baby spinach, chopped</p>
            <p>1 (15-ounce) container whole milk ricotta cheese</p>
            <p>Freshly grated Parmesan cheese, to taste</p>
          </div>

          {/* Button to order ingredients */}
          <button className="btn btn-primary mt-3" onClick={handleOrderClick}>
            Order Ingredients
          </button>

          <h4 className="mt-6">Recipe Instructions</h4>
          <div className="recipe-steps">
            <p><strong>Step 1:</strong> In a skillet over medium heat, cook ground beef, onion, and garlic with 1 teaspoon of salt and 1/2 teaspoon of pepper until the beef is browned.</p>
            <p><strong>Step 2:</strong> Transfer the cooked beef mixture to the crockpot. Add beef broth, marinara sauce, diced tomatoes, tomato paste, 1/4 teaspoon crushed red pepper, and remaining salt and pepper. Stir well.</p>
            <p><strong>Step 3:</strong> Cover and cook on low for 4-5 hours, or until the flavors have melded together.</p>
            <p><strong>Step 4:</strong> About 30 minutes before serving, stir in the broken lasagna noodles and baby spinach. Cover and cook until noodles are tender.</p>
            <p><strong>Step 5:</strong> Serve with a dollop of ricotta cheese and freshly grated Parmesan. Garnish with crushed red pepper if desired.</p>
          </div>

          <div className="tips-hints-box">
            <h5>Tips and Hints</h5>
            <p>If you prefer a creamier soup, add a splash of cream at the end of cooking.</p>
            <p>For a richer flavor, you can substitute some or all of the beef broth with vegetable or chicken broth.</p>
          </div>

          <div>Recipe created by</div>
        </div>
      </div>
    </div>
  );
}

export default CrockpotLasagnaSoup;

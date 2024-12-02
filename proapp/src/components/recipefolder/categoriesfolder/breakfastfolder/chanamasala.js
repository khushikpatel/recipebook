import React from 'react';
import { useNavigate } from 'react-router-dom';
import './breakfast.css'; // Ensure the custom CSS path is correct

function ChannaMasala() {
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
            src={require('../images/chanamasala.webp')} // Ensure the correct image path
            alt="Channa Masala"
            className="img-fluid shadow-lg"
          />
          {/* Box for serving info, prep time, cook time, and nutrition */}
          <div className="info-box mt-3 p-3 shadow-sm">
            <p><strong>Serving Size:</strong> 4 people</p>
            <p><strong>Prep Time:</strong> 20 minutes</p>
            <p><strong>Cooking Time:</strong> 40 minutes</p>
            <p><strong>Nutritions:</strong> 490 Calories</p>
          </div>
        </div>

        {/* Recipe details section */}
        <div className="col-md-6">
  <h4>Ingredients</h4>
  <div className="ingredients-list">
    <p>1 inch fresh ginger</p>
    <p>1 jalapeño chili</p>
    <p>5 garlic cloves</p>
    <p>1 medium onion</p>
    <p>3 Tbsp. vegetable oil</p>
    <p>1 tsp. salt (for simmering)</p>
    <p>1 Tbsp. Garam Masala</p>
    <p>1 tsp. ground cumin</p>
    <p>1 tsp. ground coriander</p>
    <p>1 can whole peeled tomatoes (28 oz. per can)</p>
    <p>2 cans chickpeas (14 oz. per can)</p>
    <p>1 tsp. hot sauce (for simmering)</p>
    <p>1 cup cilantro (leaves and tender sprigs)</p>
    <p>2 Tbsp. lemon juice (plus more to taste)</p>
    <p>Salt (for serving)</p>
    <p>Hot sauce (for serving)</p>
    <p>2 Tbsp. chopped cilantro (for garnish, optional)</p>
    <p>4 pieces naan bread</p>
    <p>Steamed white rice (or brown rice)</p>
  </div>

          {/* Button to order ingredients */}
          <button className="btn btn-primary mt-3" onClick={handleOrderClick}>
            Order Ingredients
          </button>

        
<h4 className="mt-6">Recipe Instructions</h4>
<div className="recipe-steps">
  <p><strong>Step 1:</strong> Scrape the ginger with a paring knife to remove peel. Slice ginger into 1/8-inch coins. Smash with the back of a chef's knife. Add to blender.</p>
  <p><strong>Step 2:</strong> Cut jalapeño in half lengthwise, remove seeds, and roughly chop. Smash garlic. Add garlic and chili to blender. Pulse to chop, scraping down sides as needed.</p>
  <p><strong>Step 3:</strong> Roughly chop onion. Add to blender and pulse several times until finely chopped. Scrape down as needed.</p>
  <p><strong>Step 4:</strong> Heat oil in a large skillet. Add onion mixture and salt. Saute until soft and golden, about 15 minutes. Add garam masala, cumin, and coriander. Saute 1 minute.</p>
  <p><strong>Step 5:</strong> Add tomatoes and break into smaller pieces. Simmer until thickened.</p>
  <p><strong>Step 6:</strong> Add chickpeas and hot sauce. Simmer for 15 minutes, stirring occasionally.</p>
  <p><strong>Step 7:</strong> Add chopped cilantro and simmer uncovered for another 10 minutes.</p>
  <p><strong>Step 8:</strong> Add lemon juice and remaining cilantro. Adjust seasoning.</p>
  <p><strong>Step 9:</strong> Serve with naan and rice. Store in the refrigerator for up to 3 days.</p>
</div>


          <div className="tips-hints-box">
            <h5>Tips and Hints</h5>
            <p>For fluffier pancakes, let the batter rest for 5 minutes before cooking.</p>
            <p>Use a non-stick skillet for best results. Add a small amount of butter or oil if needed.</p>
          </div>

          <div>Recipe created by</div>
        </div>
      </div>
    </div>
  );
}

export default ChannaMasala;

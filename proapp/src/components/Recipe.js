import React from 'react';
import RecipeNavbar from './recipefolder/RecipeNavbar';
import RecipeList from './recipefolder/Recipelist'; 
import './1.css';
const Recipe = () => {
 
  return(
  <div className="container mt-4">
          <div class="search-section">
    <div class="search-content">
    <h1>It is even better than an expensive cookery book</h1>
        <p>Learn how to make your favorite restaurant's dishes</p>
        <div class="search-bar">
            <input type="text" placeholder="I want to make..."/>
            <select>
                <option value="categories">Categories</option>
                <option value="sweets">Sweets</option>
                <option value="burgers">Burgers</option>
                <option value="drinks">Drinks</option>
                <option value="pizzas">Pizzas</option>
            </select>
            <button type="submit">Search</button>
        </div>
    </div>
          <div class="container">
        <RecipeNavbar/>
        </div>
      <RecipeList/>
         </div>
     
    </div>
 
    );
};

export default Recipe;


import React from 'react';
import './categoriesfolder/breakfastfolder/breakfast.css'; // Make sure to style it

function OrderIngredients() {
  const websites = [
    { name: 'Amazon', url: 'https://www.amazon.com' },
    { name: 'Walmart', url: 'https://www.walmart.com' },
    { name: 'Instacart', url: 'https://www.instacart.com' }
  ];
  return (
    <div className="container mt-5">
      <h2>Order Ingredients</h2>
      <p>Select a website to order ingredients:</p>
      <div className="website-buttons">
        {websites.map((site, index) => (
          <a href={site.url}  rel="noopener noreferrer" key={index}>
            <button className="btn btn-secondary m-2">{site.name}</button>
          </a>
        ))}
      </div>
    </div>
  );
}

export default OrderIngredients;

import React from 'react';
import { Link } from 'react-router-dom';
import '../1.css';
function Categories() {
  const categories = [
    { id:1, name: 'Breakfast', img:require('./images/breakfast.jpg') },
    {id:2, name: 'Brunch', img:require('./images/Brunch.jpg') },
    {id:3, name: 'Lunch', img:require('./images/Lunch.jpg') },
    {id:4, name: 'Dinner', img:require('./images/Dinner.jpg')},
    {id:5, name: 'Ice Cream', img:require('./images/icecream1.webp') },
    {id:6, name: 'Dessert', img:require('./images/greek yogurt.webp')},
  ];

  return (
    <div className="container mt-3">
      <div className="row ">
      {categories.map((category, index) => (
  <div key={index} className="col-md-4 card-container">
    <Link to={`/recipe/categories/details/${category.name.toLowerCase()}`}>
      <div className="card h-100 shadow-sm">
        <img src={category.img} className="card-img-top" alt={category.name} />
        <div className="card-body">
          <h5 className="card-title">{category.name}</h5>
        </div>
      </div>
    </Link>
  </div>
))}

 </div>
    </div>
  );
}

export default Categories;
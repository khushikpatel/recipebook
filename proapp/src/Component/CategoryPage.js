import React from 'react';
import { Link } from 'react-router-dom';
import './1.css';
function CategoryPage() {
  const categories = [
    { name: 'Breakfast', img: '../components/recipefolder/images/breakfast.jpg' },
    { name: 'Brunch', img: '../components/recipefolder/images/Brunch.jpg' },
    { name: 'Lunch', img: '../components/recipefolder/images/Lunch.jpg' },
    { name: 'Dinner', img: '../components/recipefolder/images/Dinner.jpg' },
    { name: 'Ice Cream', img: '../components/recipefolder/images/breakfast.jpg' },
    { name: 'Dessert', img: '../components/recipefolder/images/breakfast.jpg' },
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        {categories.map((category, index) => (
          <div key={index} className="col-md-4">
            <Link to={`/recipe/details/${category.name.toLowerCase()}`}>
              <div className="art-theater-card ">
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

export default CategoryPage;

import React from 'react';
import { Link } from 'react-router-dom';
import '../1.css';
const Categories = () => {
    const categories = [
        { id: 1, name: 'Indian', img: require('./images/breakfast.jpg') },
        { id: 2, name: 'Maxican', img: require('./images//Taco Cups.webp') },
        { id: 3, name: 'Italian', img: require('./images/almond Ball.webp') },
        { id: 4, name: 'Korean', img: require('./images/crustule chesse cake.webp') },
        { id: 5, name: 'Thai', img: require('./images/black magic cake.webp') },
        { id: 6, name: 'Turkish', img: require('./images/lemonbluberry.webp') },
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
};

export default Categories;

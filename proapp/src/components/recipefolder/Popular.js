import React from 'react';
import { Link } from 'react-router-dom';
import '../1.css';
const Popular= () => {
    const categories = [
        { id: 1, name: '30 Minute Meals', img: require('./images/Fudgy Brownies.webp') },
        { id: 2, name: 'Family Dinners', img: require('./images/lemonbluberry.webp') },
        { id: 3, name: 'Kid Friendly', img: require('./images/Mango lassi.webp') },
        { id: 4, name: 'BBQ', img: require('./images/Taco Cups.webp') },
        { id: 5, name: 'Toddlers', img: require('./images/Brunch.jpg') },
        { id: 6, name: 'Dairy Free  ', img: require('./images/spicytofunachos.jpeg')},
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

export default Popular;

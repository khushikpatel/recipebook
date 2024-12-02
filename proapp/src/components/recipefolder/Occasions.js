import React from 'react';
import { Link } from 'react-router-dom';
import '../1.css'; // Assuming the styles are in this file

function Occasions() {
  const categories = [
    { id: 1, name: 'Birthday', img: require('./images/birthdaycake.avif') },
    { id: 2, name: 'Fathers Day', img: require('./categoriesfolder/images/Cheesy Cauliflower Bites.jpeg') },
    { id: 3, name: 'Holidays', img: require('./images/breakfast.jpg') },
    { id: 4, name: 'Mothers Day', img: require('./images/crustule chesse cake.webp') },
    { id: 5, name: 'NewYears', img: require('./images/Energy ball.webp') },
    { id: 6, name: 'Party', img: require('./images/Taco Cups.webp') },
  ];

  return (
    <div className="container mt-3">
      <div className="row ">
        {categories.map((category, index) => (
          <div key={index} className="col-md-4 card-container">
            <Link to={`/recipe/occasion/details/${category.name.toLowerCase()}`}>
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

export default Occasions;

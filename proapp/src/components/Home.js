import React from 'react';
import './courosal.css'; // CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure Bootstrap JS is included
import image1 from './recipefolder/images/carosal1.png'; // Adjust this path based on your structure
import image2 from './recipefolder/images/carosal2.avif';
import image3 from './recipefolder/images/courosal4.avif';
import { Link } from 'react-router-dom';

const HomePage = () => {

  const breakfastRecipes = [
    { id: 1, name: 'Pancakes', img: require('./recipefolder/images/pancake.webp') },
    { id: 2, name: 'Sandwich', img: require('./recipefolder/categoriesfolder/images/Peanut Butter Banana Toast.jpeg') },
    { id: 3, name: 'Fudgy Brownies', img: require('./recipefolder/images/Fudgy Brownies.webp') },
  ];

  return (
    <div className="container mt-5">
      {/* Carousel Section */}
      <div id="recipeCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#recipeCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#recipeCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#recipeCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100" alt="First Slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Featured Recipe 1</h5>
              <p>A delicious and easy-to-make recipe.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt="Second Slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Featured Recipe 2</h5>
              <p>Perfect for any occasion.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="Third Slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Featured Recipe 3</h5>
              <p>Experience the taste of tradition.</p>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#recipeCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#recipeCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Recent Recipes Section */}
      <div className="recent-recipes mt-5">
        <h2 className="text-center">Recent Recipes</h2>
        <div className="row">
          {breakfastRecipes.map((recipe) => (
            <div key={recipe.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img src={recipe.img} className="card-img-top" alt={recipe.name} />
                <div className="card-body">
                  <h5 className="card-title">{recipe.name}</h5>
                  <p className="card-text">A quick and tasty recipe.</p>
                  <Link to={`/recipe/breakfast/details/${recipe.name.toLowerCase()}`} className="btn btn-primary">
                    View Recipe
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

import React from 'react';
import { Carousel } from 'react-bootstrap'; // Import Carousel from react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import './courosal.css'; // Optional: import your custom styles if needed
import recipeImage from './recipefolder/categoriesfolder/images/courosal.jpg';
import recipeImage2 from './recipefolder/categoriesfolder/images/coursal2.jpg';

const RecipeCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={recipeImage} // Correct image path
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Recipe 1</h3>
                    <p>Delicious recipe description goes here.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={recipeImage2} // Update to the correct image
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Recipe 2</h3>
                    <p>Another delicious recipe description goes here.</p>
                </Carousel.Caption>
            </Carousel.Item>
            {/* Add more Carousel.Item as needed */}
        </Carousel>
    );
};

export default RecipeCarousel;

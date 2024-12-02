// import React from 'react';
// import SearchBar from './collectionsearchbar';
// const Collection = () => {
//     return (
//         <div className="container mt-4">
//             <h2>Collection Page</h2>
//          <SearchBar/>
//         </div>
//     );
// };
// export default Collection;
import React from 'react';
import SearchBar from './collectionsearchbar';
import './1.css'; // Optional: import your custom styles if needed
// import recipeImage2 from './recipefolder/categoriesfolder/images/coursal2.jpg';
const Collection = () => {
    // Sample data for the cards
    const recipes = [
        {
            id: 1,
            title: "Pasta Primavera",
            image: "coursal2.jpg", // Update with correct path
            description: "A delicious and colorful pasta dish with fresh vegetables."
        },
        {
            id: 2,
            title: "Chicken Curry",
            image: "recipe Book.jpg", // Update with correct path
            description: "A spicy and flavorful chicken curry that warms the soul."
        },
        {
            id: 3,
            title: "Chocolate Cake",
            image: "Turkish Delight.webp", // Update with correct path
            description: "Rich and moist chocolate cake topped with creamy frosting."
        },
        // Add more recipe objects as needed
    ];
    return (
        <div className="container mt-4">
            <h2>Collection Page</h2>
            <SearchBar />
            <div className="row mt-4">
                {recipes.map(recipe => (
                    <div className="col-md-4 mb-4" key={recipe.id}>
                        <div className="card">
                            <img 
                                src={require(`./recipefolder/categoriesfolder/images/${recipe.image}`)} // Update to the correct image path
                                className="card-img-top" 
                                alt={recipe.title} 
                            />
                            <div className="card-body">
                                <h5 className="card-title">{recipe.title}</h5>
                                <p className="card-text">{recipe.description}</p>
                                <a href="#" className="btn btn-primary">View Recipe</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Collection;

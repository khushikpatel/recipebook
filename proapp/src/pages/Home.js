import React from 'react';
import CarouselComponent from '../Component/Carousel';
import SearchBar from '../components/SearchBar';
import {Link} from 'react-router-dom';
function Home({ isAuthenticated, handleLogout }) {
  return (
    <div>
      <CarouselComponent />
      <div className="container">
        <h2>Recent Recipes</h2>
        {/* Add recent recipe components here */}
        <SearchBar/>
         <Link to="/add-recipe">
                    <button>Create Recipe</button>
        </Link>
      </div>
    </div>
  );
}   

export default Home;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Component/Navbar';
import Home from './Home';
import Recipe from './Recipe';
import RecipeCategory from './RecipeDetails';
import Collection from './Collection';
import Tips from './Tips';

function Main() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/recipe/:category" element={<RecipeCategory />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/tips" element={<Tips />} />
      </Routes>
    </Router>
  );
}

export default Main;

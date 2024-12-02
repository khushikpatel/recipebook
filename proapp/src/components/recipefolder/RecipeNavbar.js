import React, { useState } from 'react';
import { FaUtensils, FaCalendarAlt, FaGlobe, FaStar } from 'react-icons/fa';
import Categories from './Categories';
import Occasion from './Occasions';
import Cuisines from './countries';
import Popular from './Popular';
import './RecipeNavbar.css'; // Make sure to import your CSS file

function Recipe() {
  const [activeSection, setActiveSection] = useState('');

  const handleSectionClick = (section) => (e) => {
    e.preventDefault();
    setActiveSection(section);
  };

  return (
    <div>
      <div className="navbar-container">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href="#categories" className="nav-link" onClick={handleSectionClick('categories')}>
              <FaUtensils /> Categories
            </a>
          </li>
          <li className="nav-item">
            <a href="#occasion" className="nav-link" onClick={handleSectionClick('occasion')}>
              <FaCalendarAlt /> Occasion
            </a>
          </li>
          <li className="nav-item">
            <a href="./countries" className="nav-link" onClick={handleSectionClick('cuisines')}>
              <FaGlobe /> Cuisines
            </a>
          </li>
          <li className="nav-item">
            <a href="#popular" className="nav-link" onClick={handleSectionClick('popular')}>
              <FaStar /> Popular
            </a>
          </li>
        </ul>
      </div>

      {/* Conditional rendering based on the active section */}
      {activeSection === 'categories' && <Categories />}
      {activeSection === 'occasion' && <Occasion />}
      {activeSection === 'cuisines' && <Cuisines />}
      {activeSection === 'popular' && <Popular />}

      {/* Default content when no section is selected */}
      {!activeSection && (
        <div>
          <h1>Welcome to the Recipe Page!</h1>
        </div>
      )}
    </div>
  );
}

export default Recipe;

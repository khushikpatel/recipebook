import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './collectionsearchbar';
import './navbar.css';

const Navbar = ({ isAuthenticated, handleLogout }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid ">
                <Link className="navbar-brand" to="/Home">FoodBook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/recipes">Recipes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/collections">Collections</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tips">Tips</Link>
                        </li>
                    </ul>

                    {/* Integrated SearchBar component */}
                    <SearchBar />

                    <ul className="navbar-nav ml-auto">
                        {!isAuthenticated ? (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                            </>
                        ) : (
                            <li>
                                <button onClick={handleLogout} className="nav-item nav-link">Logout</button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;

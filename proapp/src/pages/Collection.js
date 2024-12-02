import React from 'react';
import SearchBar from '../components/SearchBar';

function Collection() {
  return (
    <div className="container">
      <SearchBar />
      <h2>Your Recipe Collection</h2>
      {/* Add collection items */}
    </div>
  );
}

export default Collection;

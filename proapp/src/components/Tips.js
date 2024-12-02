import React from 'react';
import SearchBar from './collectionsearchbar';
import './1.css'
const Tips = () => {
    return (
        <div className="tips-hints-box">
        <h2>Tips Page</h2>
        <SearchBar />
      
        <div className="tips-container">
          {/* Tip Card 1 */}
          <div className="tip-card">
            <h3>Hints</h3>
            <p>Toss blueberries in flour before adding them to the batter to prevent them from sinking.</p>
          </div>
      
          {/* Tip Card 2 */}
          <div className="tip-card">
            <h3>Tips</h3>
            <p>Use buttermilk for a lighter, fluffier bread.</p>
          </div>
      
          {/* Tip Card 3 */}
          <div className="tip-card">
            <h3>Tips</h3>
            <p>Add cooked chicken or turkey for a complete meal.</p>
          </div>
      
          {/* Tip Card 4 */}
          <div className="tip-card">
            <h3>Hints</h3>
            <p>Let the batter rest for about 5-10 minutes for fluffier pancakes.</p>
          </div>
      
          {/* Tip Card 5 */}
          <div className="tip-card">
            <h3>Tips</h3>
            <p>Experiment with adding fruits like blueberries or bananas directly into the batter for a twist.</p>
          </div>
      
          {/* Tip Card 6 */}
          <div className="tip-card">
            <h3>General Tip</h3>
            <p>Read the Recipe First: Always read the entire recipe before starting, so you understand the process and have everything ready.</p>
          </div>
      
          {/* Tip Card 7 */}
          <div className="tip-card">
            <h3>General Tip</h3>
            <p>Mise en Place: Gather and prepare all ingredients beforehand. Chop, measure, and set everything in place to streamline cooking.</p>
          </div>
        </div>
      </div>
      
    );
};

export default Tips;

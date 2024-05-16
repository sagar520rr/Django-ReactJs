// App.js
import React from 'react';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import './App.css'; // Adjust the import statement

function App() {
  return (
    <div className="app">
      <Banner />
      <div className="container">
        <div className="filters">
          {/* Add filter options here */}
          <h3>Filters</h3>
          {/* Example filter options */}
          <div className="filter-option">
            <label htmlFor="color">Color:</label>
            <select name="color" id="color">
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </div>
          <div className="filter-option">
            <label htmlFor="material">Material:</label>
            <select name="material" id="material">
              <option value="wood">Wood</option>
              <option value="metal">Metal</option>
              <option value="plastic">Plastic</option>
            </select>
          </div>
        </div>
        <div className="product-container">
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export default App;

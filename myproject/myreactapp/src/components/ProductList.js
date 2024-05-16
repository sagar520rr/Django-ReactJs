// src/ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product'; // Adjust the path as needed

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('ascending');

  useEffect(() => {
    axios.get('http://localhost:8000/products/')
      .then(response => {
        // Update the state with the products array from the response data
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  // Function to handle sorting
  const handleSortChange = (event) => {
    const order = event.target.value;
    setSortOrder(order);

    // Sort products based on selected order
    const sortedProducts = [...products].sort((a, b) => {
      if (order === 'ascending') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    setProducts(sortedProducts);
  };

  // CSS styles for sort dropdown
  const sortDropdownStyle = {
    marginBottom: '20px'
  };

  return (
    <div className="product-list">
      {/* Sort dropdown */}
      <div style={sortDropdownStyle}>
        <label htmlFor="sort">Sort by Price:</label>
        <select id="sort" value={sortOrder} onChange={handleSortChange}>
          <option value="ascending">Low to High</option>
          <option value="descending">High to Low</option>
        </select>
      </div>

      <h1>Products</h1>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

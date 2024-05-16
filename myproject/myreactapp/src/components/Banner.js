import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define the CSS styles as a string
const bannerStyles = `
  .banner {
    background-color: #f0f0f0;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
  }

  .banner h2 {
    color: #333;
    font-size: 24px;
    margin-right: 20px;
  }

  .categories {
    display: flex;
    align-items: center;
  }

  .category {
    margin-right: 10px;
  }

  .category img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 5px;
  }
`;

const Banner = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from the backend
    axios.get('http://localhost:8000/categories/')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <div className="banner">
      <h2>Sofa's</h2>
      <div className="categories">
        {categories.map(category => (
          <div key={category.id} className="category">
            <img src={category.image} alt={category.name} />
            <span>{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Apply the CSS styles to the document
const styleElement = document.createElement('style');
styleElement.appendChild(document.createTextNode(bannerStyles));
document.head.appendChild(styleElement);

export default Banner;

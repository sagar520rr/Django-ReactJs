import React from 'react';

// Define CSS styles as a string
const productStyles = `
  .product {
    width: calc(33.33% - 20px);
    margin-right: 20px;
    margin-bottom: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    overflow: hidden;
    position: relative;
  }

  .product:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .product img {
    width: 100%;
    height: auto;
    border-radius: 5px 5px 0 0;
  }

  .product-info {
    padding: 15px;
  }

  .product-info h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #333;
  }

  .product-info p {
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
  }
`;

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
      </div>
    </div>
  );
};

// Apply the CSS styles to the document
const styleElement = document.createElement('style');
styleElement.appendChild(document.createTextNode(productStyles));
document.head.appendChild(styleElement);

export default Product;

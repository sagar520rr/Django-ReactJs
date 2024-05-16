// Import necessary modules
import React from 'react';
import { createRoot } from 'react-dom';
import './index.css'; // Import CSS file
import App from './App';

// Define the mutation event handler function
const handleMutation = mutations => {
  console.log('DOM subtree modified:', mutations);
  // Add your logic to handle mutations here
};

// Create a new MutationObserver instance and observe changes to the root of the document
const observer = new MutationObserver(handleMutation);
observer.observe(document.documentElement, { subtree: true, childList: true });

// Use createRoot to render the root component (App) to the DOM
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

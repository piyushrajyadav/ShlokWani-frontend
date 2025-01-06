import React from "react";
import ReactDOM from "react-dom/client";  // Updated import for ReactDOM in React 18
import './styles/app.css';  // Correct path for App.css (case-sensitive)
import App from './App';  // Correct path for App component

// Create the root of the app using ReactDOM.createRoot()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

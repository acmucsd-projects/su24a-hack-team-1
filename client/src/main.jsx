import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Ensure your environment variable is set up correctly in a .env file
const clientId = process.env.GOOGLE_CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);

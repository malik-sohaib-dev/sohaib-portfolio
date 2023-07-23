import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './smoothscroll.css';
import './smoothscroll.js'
import DeviceProvider from './contexts/deviceContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DeviceProvider>
      <App />
    </DeviceProvider>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/bootstrap.css';
import './assets/css/bootstrap.css.map';
import './assets/css/soft-ui-dashboard.css';
import './assets/css/soft-ui-dashboard.css.map';
import './index.css';
import '../src/assets/css/customcss.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


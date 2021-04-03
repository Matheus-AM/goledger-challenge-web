import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
// bootstrap does conflict with the strict mode

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('root')
);

reportWebVitals(console.log);
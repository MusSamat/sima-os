import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from "./Store/UserStore";
import ProductStore from "./Store/ProductStore";

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    product: new ProductStore() ,
  }}
  >
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
reportWebVitals();

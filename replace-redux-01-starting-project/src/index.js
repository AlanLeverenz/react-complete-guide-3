import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
// import productReducer from './store/reducers/products';
// import ProductsProvider from './context/products-context';
import configureProductStore from './hooks-store/products-store';

// applying the hooks-store function
configureProductStore();

// const rootReducer = combineReducers({
//   shop: productReducer
// });

// const store = createStore(rootReducer);

// ReactDOM.render(
//   <ProductsProvider>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </ProductsProvider>,
//   document.getElementById('root')
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

const root = createRoot(document.getElementById('root'));
root.render(
  // <ProductsProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </ProductsProvider>
);


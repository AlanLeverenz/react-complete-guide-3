import React from 'react';

import ProductItem from '../components/Products/ProductItem';
import { useStore } from '../hooks-store/store';
import './Products.css';

// useStore gives access to the global store and the global dispatch function
// get products key from initStore

const Products = props => {
  const state = useStore()[0];
  return (
    <ul className="products-list">
      {state.products.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;

// this is the 'concrete' store where actions are used to update products

import { initStore } from './store';

const configureStore = () => {
  const actions = {

    // the specific action function that updates products list
    // productId is the payload from the store when an action is dispatched
    TOGGLE_FAV: (curState, productId) => {
      const prodIndex = curState.products.findIndex(p => p.id === productId);
      // value is being reversed
      const newFavStatus = !curState.products[prodIndex].isFavorite;
      // spread operator reveals the details of its objects
      const updatedProducts = [...curState.products];
      updatedProducts[prodIndex] = {
        ...curState.products[prodIndex],
        isFavorite: newFavStatus
      };
      return { products: updatedProducts }
    }
  };

  // initializes the store's products
  // gets actions from configureStore
  // 
  initStore(actions, {
    products:
      [
        {
          id: 'p1',
          title: 'Red Scarf',
          description: 'A pretty red scarf.',
          isFavorite: false
        },
        {
          id: 'p2',
          title: 'Blue T-Shirt',
          description: 'A pretty blue t-shirt.',
          isFavorite: false
        },
        {
          id: 'p3',
          title: 'Green Trousers',
          description: 'A pair of lightly green trousers.',
          isFavorite: false
        },
        {
          id: 'p4',
          title: 'Orange Hat',
          description: 'Street style! An orange hat.',
          isFavorite: false
        }
      ]
  })
};

export default configureStore;
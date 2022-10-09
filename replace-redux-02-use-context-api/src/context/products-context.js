import React, { useState } from 'react';

export const ProductsContext = React.createContext({
  products: [],
  toggleFav: (id) => { }
});

// a functional component
export default props => {
  const [productsList, setProductsList] = useState([
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
  ]);

  const toggleFavorite = productId => {
    setProductsList(currentProdList => {
      const prodIndex = currentProdList.findIndex(
        p => p.id === productId);
      const newFavStatus = !currentProdList[prodIndex].isFavorite;
      console.log(newFavStatus);
      const updatedProducts = [...currentProdList];
      updatedProducts[prodIndex] = {
        ...currentProdList[prodIndex],
        isFavorite: newFavStatus
      };
      return updatedProducts;
    });
  };

  // every child within the ProductsContext will have access to the productsList
  // when the state changes all listeners will be updated
  return (
    <ProductsContext.Provider
      value={{
        products: productsList,
        toggleFav: toggleFavorite
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

//Making useContext Hook for handling purchase on different pages(children)

import React, { createContext, useContext} from 'react';

const ShoppingCartContext = createContext();
const useShoppingCartContext = () => useContext(ShoppingCartContext);

const ShoppingCartProvider = ({ children }) => {
  const purchaseCart = [];

  const handlePurchase = (id, item) => {
    const alreadyStoredProducts = JSON.parse(localStorage.getItem('webshop.purchase')) || [];
    const result= alreadyStoredProducts.map(item=> item.id);

      if( typeof alreadyStoredProducts!=='undefined' && alreadyStoredProducts.length>0 && result[0] === id){
      alert('Dit item is al aanwezig in je winkelmandje.')
    }
    else{
      purchaseCart.push({ id, item });
    alert('Deze koffie is toegevoegd aan uw winkelmandje.');
    localStorage.setItem('webshop.purchase', JSON.stringify(purchaseCart));
    }
    

  }

  const handleRemove = (id, state) => {
    const totalProducts = JSON.parse(localStorage.getItem('webshop.purchase'));
    const newCart = totalProducts.filter(item => id !== item.id);
    localStorage.setItem('webshop.purchase', JSON.stringify(newCart));
    state(newCart);
  }

  return (
    <ShoppingCartContext.Provider value={{ handlePurchase, handleRemove }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export {
  ShoppingCartContext,
  ShoppingCartProvider,
  useShoppingCartContext,
};
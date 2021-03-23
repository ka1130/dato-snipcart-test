import React, { useState, createContext } from 'react';
// import * as cartUtils from '../utils/cart';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  // const [cart, setCart] = useState(cartUtils.getCart());
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };

export default CartContext;

import { createContext, useState } from 'react';

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart(prev => [...prev, {...item, quantity}])
      setTotalQuantity(prev => prev + quantity);
    } else {
      console.error('El producto ya fue agregado');
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter(prod => prod.id !== itemId);
    const itemToRemove = cart.find(prod => prod.id === itemId);
    setCart(cartUpdated);
    setTotalQuantity(prev => prev - itemToRemove.quantity);
  };
  
  const clearCart = () => {
    setCart([]);
    setTotalQuantity(0);
  };
    
  const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId);
  };

  return (
    <CartContext.Provider value={{ cart, totalQuantity, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};


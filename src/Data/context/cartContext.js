import { createContext, useState } from 'react';

export const CartContext = createContext({
  cart: []
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart(prev => [...prev, {...item, quantity}])
      setTotalQuantity(prev => prev + quantity);
      calculateTotalPrice();
    } else {
      console.error('El producto ya fue agregado');
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter(prod => prod.id !== itemId);
    const itemToRemove = cart.find(prod => prod.id === itemId);
    setCart(cartUpdated);
    setTotalQuantity(prev => prev - itemToRemove.quantity);
    calculateTotalPrice();
  };
  
  const calculateTotalPrice = () => {
    let totalPrice = 0
    cart.forEach(item => {
      totalPrice += (item.quantity * item.price)
    });
    return totalPrice.toLocaleString('es-AR');
  };

  const updateQuantity = (itemId, newQuantity) => {
    const itemToUpdate = cart.find(prod => prod.id === itemId);
    const cartUpdated = cart.map(prod => {
      if (prod.id === itemId) {
        prod.quantity = newQuantity;
      }
      return prod;
    });
    setCart(cartUpdated);
    setTotalQuantity(prev => prev - itemToUpdate.quantity + newQuantity);
    calculateTotalPrice();
  };

  const clearCart = () => {
    setCart([]);
    setTotalQuantity(0);
    setTotalPrice(0)
  };
    
  const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId);
  }; 
  return (
    <CartContext.Provider value={{ cart, totalQuantity, totalPrice, addItem, removeItem, updateQuantity, clearCart, calculateTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};


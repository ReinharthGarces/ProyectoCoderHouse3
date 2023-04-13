// import styles from './ItemCount.module.css';
import { useState } from 'react';


const ItemCount =({stock, initial, onAdd}) => {
  const [quantity, setQuantity] = useState (initial)

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity+1)
    }
  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity-1)
    }
  }

  return (
    <div className = "counter">
      <div className = "controls">
        <buttom className = "buttom" onClick ={decrement}>-</buttom>
        <h4 className = "number">{quantity}</h4>
        <buttom className = "buttom" onClick ={increment}>+</buttom>
      </div>
      <div>
        <button className = "buttom" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
      </div>
    </div>
  )
};


export default ItemCount;
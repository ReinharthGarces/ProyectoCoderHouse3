import styles from './CartItem.module.css'
import React from 'react';


const CartItem = ({ name, price, quantity}) => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemDetails}>
        <span>{name}</span>
        <span><strong>Precio: </strong>$ {price}</span>
        <span><strong>cantidad: </strong>{quantity}</span>
        <button className={styles.eliminarDelCarrito}>Eliminar</button>
      </div>
    </div>
  )
}

export default CartItem;
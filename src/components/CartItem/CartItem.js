import styles from './CartItem.module.css'
import React from 'react';


const CartItem = ({ name, tittle, img, price, quantity}) => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemDetails}>
        <h3>{tittle}</h3>
        <picture>
          <img src={img} alt={name} className={styles.cartImg}></img>
        </picture>
        <span>Nombre: {name}</span>
        <span>Precio: {price}</span>
        <span>cantidad: {quantity}</span>
        </div>
        <div className={styles.eliminarDelCarrito}>
          <button>Eliminar</button>
        </div>
    </div>
  )
}

export default CartItem;
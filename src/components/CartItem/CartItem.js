import styles from './CartItem.module.css'
import { CartContext } from '../../Data/context/cartContext';
import { useContext } from 'react';


const CartItem = ({ name, id, price, quantity}) => {
  const { removeItem } = useContext(CartContext)

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemDetails}>
        <span><strong>{name}</strong></span>
        <span><strong>Precio: </strong>$ {price}</span>
        <span><strong>cantidad: </strong>{quantity}</span>
        <button onClick={() =>removeItem(id)} className={styles.eliminarDelCarrito}>Eliminar</button>
      </div>
    </div>
  )
}

export default CartItem;
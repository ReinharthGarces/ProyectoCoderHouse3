import styles from './Cart.module.css';
import { useContext } from "react";
import { CartContext } from '../../Data/context/cartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => { 
  const { cart, clearCart, totalQuantity, calculateTotalPrice } = useContext(CartContext)


  if (totalQuantity === 0) {
    return (
      <div className={styles.emptyCart}>
        <h1 className={styles.tittle}>Carrito Vacio</h1>
        <img src='https://i.postimg.cc/jdyX6dWv/Carrito-Vacio.gif' className={styles.gif} alt='Carrito vacio'></img>
        <Link to = '/ProyectoCoderHouse3' className={styles.irAHome}>ir al inicio...</Link>
      </div>
    )
  }

  return(
    <div>
      <div className={styles.carrito}>
      <h1 className={styles.tittle}>Productos en carrito</h1>
      { cart.map(p => <CartItem key={p.id} {...p }/>) }
      <h3 className={styles.total}>Total: ${calculateTotalPrice()}</h3>
      </div>

      <div className={styles.buttons}>
      <button onClick= {() => clearCart()} className={styles.vaciarCarrito}>Vaciar carrito</button>
      <Link to='/checkout' className={styles.irA}>Ir a comprar</Link>
      </div>
    </div>
  )
}

export default Cart;
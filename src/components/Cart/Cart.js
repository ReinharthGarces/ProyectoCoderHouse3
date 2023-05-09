import styles from './Cart.module.css';
import { useContext } from "react";
import { CartContext } from '../../Data/context/cartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => { 
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext)


  if (totalQuantity === 0) {
    return (
      <div>
        <h1>Carrito Vacio</h1>
        <Link to = '/ProyectoCoderHouse3' className= "Option">Productos</Link>
      </div>
    )
  }

  console.log(totalQuantity)
  return(
    <div>
      <div className={styles.carrito}>
      <h2 className={styles.tittle}>Productos en carrito</h2>
      { cart.map(p => <CartItem key={p.id} {...p }/>) }
      <h3 className={styles.total}>Total: ${total}</h3>
      </div>

      <div className={styles.buttons}>
      <button onClick= {() => clearCart()} className={styles.vaciarCarrito}>Vaciar carrito</button>
      <Link to='/checkout' className={styles.comprar}>Ir a comprar</Link>
      </div>
    </div>
  )
}

export default Cart;
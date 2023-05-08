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
        <Link to = '/' className= "Option">Productos</Link>
      </div>
    )
  }

  console.log(totalQuantity)
  return(
    <div>
      { cart.map(p => <CartItem key={p.id} {...p }/>) }
      <h3>Total: ${total}</h3>
      <button onClick= {() => clearCart()} className="Button">Vaciar carrito</button>
      <Link to='/checkout' className={styles.Option}>Ir a comprar</Link>
    </div>
  )
}

export default Cart;
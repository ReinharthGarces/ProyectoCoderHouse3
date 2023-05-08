import styles from './CartWidget.module.css'
import cart from './assets/cart.svg';
import { useContext } from 'react';
import { CartContext } from '../../Data/context/cartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    console.log(CartContext)
    console.log(totalQuantity)
    return (
        <Link to='/cart' className={styles.cartWidget}>   
          <img src={cart} alt="cart-widget"/>
          {totalQuantity}
        </Link>
    )
}

export default CartWidget;

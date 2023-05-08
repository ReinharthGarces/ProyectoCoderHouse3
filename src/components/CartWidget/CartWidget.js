import styles from './CartWidget.module.css';
import cart from './assets/cart.svg';
import { useContext } from 'react';
import { CartContext } from '../../Data/context/cartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to='/cart' className={styles.cartWidget} style={{
          display: totalQuantity > 0 ? "flex": "none"}}>   
          <img src={cart} alt="cart-widget"/>
          <span className={styles.cartQuantity}>{totalQuantity}</span>
        </Link>
    );
}

export default CartWidget;

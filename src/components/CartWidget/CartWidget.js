import cart from './assets/cart.svg';
import { useContext } from 'react';
import { CartContext } from '../../Data/context/cartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' style={{
          display: "flex",
          width: "auto",
          margin: "20px",
          padding: "15px 15px",
          borderRadius: "5px",
          marginLeft: "95vw",
          cursor: "pointer",
          backgroundColor: "#E5D9B6",
          border: "2px solid #285430",
          // display: totalQuantity > 0 ? 'block' : 'none'
        }}>       
          <img src={cart} alt="cart-widget"/>
          {totalQuantity}
        </Link>
    )
}


export default CartWidget
import cart from './assets/cart.svg';

const CartWidget = () => {
    return (
        <button style={{
          display: "flex",
          margin: "20px",
          padding: "10px 15px",
          borderRadius: "5px",
          marginLeft: "95vw",
        }}>        
          <img src={cart} alt="cart-widget"/>
          0
        </button>
    )
}

export default CartWidget
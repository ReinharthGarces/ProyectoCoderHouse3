import cart from './assets/cart.svg';

const CartWidget = () => {
    return (
        <button style={{
          display: "flex",
          width: "3.2vw",
          margin: "20px",
          padding: "10px 15px",
          borderRadius: "5px",
          marginLeft: "95vw",
          cursor: "pointer",
          backgroundColor: "#E5D9B6",
          border: "2px solid #285430"
        }}>       
          <img src={cart} alt="cart-widget"/>
          0
        </button>
    )
}


export default CartWidget
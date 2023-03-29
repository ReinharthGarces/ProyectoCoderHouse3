import NavbarStyles from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";

<NavbarStyles />
function Navbar (props) {
  console.log(props)
  return (
    <div>
      <nav>
        <h1>Reinharth Garces</h1>
      <ul>
        <li>Nosotros</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
      </nav>
      <CartWidget/> 
    </div>
    )
  } 

  export default Navbar;
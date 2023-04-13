import NavbarStyles from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
// import {Navlink} from 'react-router-dom';

<NavbarStyles />
function Navbar (props) {
  console.log(props)
  return (
    <div>
      <nav>
        <h1>ReinharthGarces</h1>
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

  // <NavLink to = {"/"}> home</NavLink>


  export default Navbar;
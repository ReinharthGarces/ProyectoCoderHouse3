import NavbarStyles from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from 'react-router-dom';

<NavbarStyles />
function Navbar (props) {
  console.log(props)
  return (
    <div>
      <nav>
        <Link to='/'><h1>Reinharth-Electronics!</h1></Link>
      <ul>
        <NavLink to={'/category/Telefonos'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Telefonos</NavLink>
        <NavLink to={'/category/Notebooks'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Notebooks</NavLink>
        <NavLink to={'/category/Televisores'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Televisores</NavLink>
      </ul>
      </nav>
      <CartWidget/> 
    </div>
    )
  } 



  export default Navbar;
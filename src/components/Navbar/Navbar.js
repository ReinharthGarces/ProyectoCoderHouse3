import styles from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from 'react-router-dom';


function Navbar () {
  return (
    <div>
      <nav>
        <Link to='/'><h1>Reinharth-Electronics!</h1></Link>
      <ul>
        <NavLink to={'/category/Telefonos'} className={({ isActive}) => isActive ? styles.ActiveOption : 'Option'}>Telefonos</NavLink>
        <NavLink to={'/category/Notebooks'} className={({isActive}) => isActive ? styles.ActiveOption : 'Option'}>Notebooks</NavLink>
        <NavLink to={'/category/Televisores'} className={({isActive}) => isActive ? styles.ActiveOption : 'Option'}>Televisores</NavLink>
      </ul>
      </nav>
      <CartWidget/> 
    </div>
    )
  } 



  export default Navbar;
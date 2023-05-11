import styles from './ItemDetail.module.css';
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../../Data/context/cartContext';

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
      setQuantityAdded(quantity)
  
    const item = { id, name, price }

    addItem(item, quantity)
  }

  return (
    <article className={styles.CardItem}>
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>

      <picture>
        <img src={img} alt={name} className={styles.ItemImg}/>
      </picture>
      <section>
        <p className={styles.infoProducto}><strong>Categoria:</strong> {category}</p>
        <p className={styles.infoProducto}><strong>Descripcion:</strong>  {description}</p>
        <p className={styles.infoProducto}><strong>Precio:</strong>  ${price}</p>          
      </section>

      <footer className={styles.ItemFooter}>
        {quantityAdded > 0 ? (<Link to = '/cart' className = {styles.irAlCarrito}> Ir al carrito...</Link>) 
        :
        (<ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />)
        }
      </footer>
    </article>
  )
}

export default ItemDetail;





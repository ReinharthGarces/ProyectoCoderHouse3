import styles from './ItemDetail.module.css';
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
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
        <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad agregada" , quantity)} />
      </footer>
    </article>
  )
}

export default ItemDetail;





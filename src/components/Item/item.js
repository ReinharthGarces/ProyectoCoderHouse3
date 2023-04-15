import styles from './Item.module.css';
import { Link } from 'react-router-dom';

const Item = ({id, name, img, price, stock}) => {
  return (
    <article className={styles.CardItem}>
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} height={250} width={270} alt={name} className={styles.ItemImg}/>
      </picture>
      <section>
        <p className={styles.Info}><strong>Precio:</strong> ${ price }</p>
        <p className={styles.Info}><strong>Stock disponible:</strong> { stock }</p>
      </section>
      <footer className="ItemFooter">
        <Link to={`/item/${id}`} className={styles.verDetalle}>Ver detalle...</Link>
      </footer>
    </article>
  )
}

export default Item;
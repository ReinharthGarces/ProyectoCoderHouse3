// import styles from './Item.module.css';

const Item = ({id,name,img,price,stock}) => {
  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg"/>
      </picture>
      <section>
        <p className="Info">Precio: ${price}</p>
        <p className="Info">Stock disponible: {stock}</p>
      </section>
      <footer className="ItemFooter">
        <buttom className="Option">Ver detalle</buttom>
      </footer>
    </article>
  )
}

export default Item;
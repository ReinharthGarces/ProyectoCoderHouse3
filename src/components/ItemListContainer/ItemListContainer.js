import { useState, useEffect } from 'react';
import { getProducts } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = ({greeting}) => {
  const [products, setproducts] = useState ([])
  
  useEffect (() =>{
    getProducts()
    .then(response => {
      setproducts(response)
    })
    .catch(error => {
      console.error(error)
    })
  }, [])


    return (
      <div>
        <h1>{greeting}</h1>
        <ItemList products ={products} />
      </div>
    )
}

export default ItemListContainer;
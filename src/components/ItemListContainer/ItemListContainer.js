import { useState, useEffect } from 'react';
import { getProducts, getProductByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
  const [products, setProducts] = useState ([])
  console.log (products);
  const { categoryId } = useParams ()
  console.log (categoryId);
  useEffect (() =>{
    const asyncFunc = categoryId ? getProductByCategory : getProducts

    asyncFunc(categoryId)
    .then(response => {
      setProducts(response)
    })
    .catch(error => {
      console.error(error)
    })
  }, [categoryId])


    return (
      <div>
        <ItemList products ={ products } />
      </div>
    )
}

export default ItemListContainer;
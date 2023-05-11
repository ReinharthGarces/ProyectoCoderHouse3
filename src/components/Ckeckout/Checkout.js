import styles from './Checkout.module.css'
import { useState } from 'react'
import { useContext } from "react";
import { db } from '../../config/firebase'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { CartContext } from '../../Data/context/cartContext'
import { Timestamp, addDoc, collection, documentId, writeBatch, query, where, getDocs } from 'firebase/firestore'

const Checkout = () =>{
  const [loading, setLoading] = useState(false)
  const [ orderId, setOrderId] = useState("")

  const { cart, calculateTotalPrice, clearCart } = useContext(CartContext)

  const createOrder = async ({name, phone, email}) => {
    setLoading(true)
    
    try {
      const objOrder = {
        buyer: {
          name, phone, email
        },
        items: cart,
        total: calculateTotalPrice(),
        date: Timestamp.fromDate(new Date())
      }

      const batch = writeBatch(db)

      const outOfStock = []

      const ids = cart.map(prod => prod.id)

      const productsRef = collection(db, 'products')

      const productsAddedFromFirestore = await getDocs (query(productsRef, where(documentId(), 'in', ids)))
      
      const { docs } = productsAddedFromFirestore

      docs.forEach(doc => {
        const dataDoc = doc.data()
        const stockDb = dataDoc.stock

        const productAddedToCart = cart.find(prod => prod.id === doc.id)
        const prodQuantity = productAddedToCart?.quantity
        
        if(stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity})
        }else {
          outOfStock.push ({ id: doc.id, ...dataDoc})
        }
      })

      if(outOfStock.length === 0) {
        await batch.commit()

        const orderRef = collection(db, 'orders')
        const orderAdded = await addDoc(orderRef, objOrder)

        setOrderId(orderAdded.id)
        clearCart()
      }else {
        console.error('hay productos que estan fuera de stock')
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  if(loading) {
    return <h1 className={styles.ordenEnProceso}>Orden en Proceso...</h1>
  }
  
  if(orderId) {
    return (
    <div className={styles.graciasPorSuCompra}>
    <h1 className={styles.idDeOrden}><strong>El id de su orden es:</strong> {orderId}</h1>
    <img src='https://i.postimg.cc/9XtCVqw7/ok.gif' className={styles.gif} alt='Gracias por su Compra'></img>
    </div>
    )
  }

  return (
    <div className={styles.checkOut}>
      <h1 className={styles.informacionCliente}>Datos Personales</h1>
      <CheckoutForm onConfirm= {createOrder} />
    </div>
  )
}
export default Checkout;


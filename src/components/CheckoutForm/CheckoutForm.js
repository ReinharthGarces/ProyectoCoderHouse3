import styles from './CheckoutForm.module.css'
import { useState } from 'react'

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const handleConfirm = (event) => {
    event.preventDefault()

    const userDate = {
      name, phone, email
    }

    onConfirm(userDate)
  }

  return (
    <div className={styles.datosPersonales}>
      <form onSubmit={handleConfirm}> 
        <label className={styles.labelForm}><strong>Nombre:</strong> 
          <input 
            placeholder='Ingrese su nombre...'
            className={styles.inputForm}
            type='text'
            value={name}
            onChange={({target}) => setName(target.value)}
          />
        </label>
        <label className={styles.labelForm}> <strong>Telefono:</strong>
          <input 
            placeholder='Ingrese numero telefonico...'
            className={styles.inputForm}
            type='text'
            value={phone}
            onChange={({target}) => setPhone(target.value)}
          />
        </label>
        <label className={styles.labelForm}> <strong>Email:</strong>
          <input 
            placeholder='Ingrese su email...'
            className={styles.inputForm}
            type='email'
            value={email}
            onChange={({target}) => setEmail(target.value)}
          />
        </label>
        <div className='Label'>
          <button type='submit' className={styles.crearOrden}>Crear Orden</button>

        </div>
      </form>
    </div>
  )
}

export default CheckoutForm;
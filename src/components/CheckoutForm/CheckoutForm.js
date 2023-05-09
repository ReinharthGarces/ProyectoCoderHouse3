import './CheckoutForm.module.css'
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
    <div className='Container'>
      <form onSubmit={handleConfirm} className='Form'> 
        <label className='Label'> <strong>Nombre:</strong> 
          <input 
            placeholder='Ingrese su nombre...'
            className='Input'
            type='text'
            value={name}
            onChange={({target}) => setName(target.value)}
          />
        </label>
        <label className='Label'> <strong>Telefono:</strong>
          <input 
            placeholder='Ingrese numero telefonico...'
            className='Input'
            type='text'
            value={phone}
            onChange={({target}) => setPhone(target.value)}
          />
        </label>
        <label className='Label'> <strong>Email:</strong>
          <input 
            placeholder='Ingrese su email...'
            className='Input'
            type='email'
            value={email}
            onChange={({target}) => setEmail(target.value)}
          />
        </label>
        <div className='Label'>
          <button type='submit' className='button'>Crear Orden</button>

        </div>
      </form>
    </div>
  )
}

export default CheckoutForm;
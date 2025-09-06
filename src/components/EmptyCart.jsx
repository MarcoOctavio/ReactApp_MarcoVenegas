import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div style={{padding:'2rem'}}>
        <h2> Tu carrito esta vacio 😭</h2>
        <h4>Te invitamos a ver nuestros productos</h4>
        <Link className='btn btn-dark' to='/'>Ir a comprar</Link>
    </div>
  )
}

export default EmptyCart
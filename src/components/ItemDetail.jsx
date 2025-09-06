import {React, useContext, useState} from 'react'
import './ItemCount.jsx'
import ItemCount from './ItemCount.jsx'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import Swal from 'sweetalert2'

const ItemDetail = ({item}) => {
  const {addItem, itemQuantity}= useContext(CartContext)
  const [purchase, setPuchase]=useState(false)

  const onAdd = (cantidad)=>{
    addItem(item, cantidad)
    setPuchase(true)
    Swal.fire({
      position:'top-end',
      icon:'success',
      title:`Agregaste ${item.name} al carrito`,
      showCancelButton:false,
      showConfirmButton:false,
      timer:1000
    })
  }
const stockActualizado = item.stock - itemQuantity(item.id)


  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px'}}>
        <h1>{item.name}</h1>
        <img alt={item.name}src={item.image}/>
        <p>{item.description}</p>
        <p>Price: ${item.price}</p>
        <p>Stock: {item.stock} unidades</p>
        <p>Precio: ${item.price},00</p>
        {purchase ? <Link to='/cart' className='btn btn-success'>Terminar mi compra</Link> : 
        <ItemCount initial={1} stock={stockActualizado} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetail

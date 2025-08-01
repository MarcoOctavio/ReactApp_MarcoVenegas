import React from 'react'

const ItemDetail = ({item}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px'}}>
        <h1>{item.name}</h1>
        <img alt={item.name}src={item.image}/>
        <p>{item.description}</p>
        <p>Price: ${item.price}</p>
        <p>Stock: {item.stock} unidades</p>
        <p>Precio: ${item.price},00</p>
    </div>
  )
}

export default ItemDetail

import React from 'react'
import Item from './Item'

const ItemList = ({data}) => {
  return (
    <div style={
        {display: 'flex', 
        justifyContent: 'center', flexWrap: 'wrap', gap: '20px', flexWrap:'wrap'}}>
      {data.map((prod)=> <Item key={prod.id} prod={prod}/>)}
    </div>
  )
}

export default ItemList

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOneProduct } from '../mock/AsyncService'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [item, setDetails] = useState({})

    const {id} = useParams()
    useEffect(()=>{
        getOneProduct(id)
        .then((res)=> setDetails(res))
        .catch((error)=> console.log(error))
    },[id])

  return (
    <div>
      <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer

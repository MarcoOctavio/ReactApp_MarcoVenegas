import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { db } from '../service/firebase' 
import { doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const { id } = useParams() 

  useEffect(() => {
    let isMounted = true

    const fetchProduct = async () => {
      try {
        setLoading(true)
        setError(null)

        const ref = doc(db, 'productos', id)
        const snap = await getDoc(ref)

        if (!snap.exists()) {
          throw new Error('Producto no encontrado')
        }

        const data = { id: snap.id, ...snap.data() }
        if (isMounted) setItem(data)
      } catch (e) {
        console.error(e)
        if (isMounted) setError(e.message)
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    if (id) fetchProduct()
    return () => { isMounted = false }
  }, [id])

  if (loading) return <p className="text-center mt-5">Cargando producto…</p>
  if (error) return <p className="text-center mt-5 text-danger">{error}</p>

  return (
    <div>
      {item && <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer

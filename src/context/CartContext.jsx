import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

const prodLS = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({children}) => {
    const [cart, setCart]=useState(prodLS)


    useEffect(()=>{
        localStorage.setItem('carrito', JSON.stringify(cart))
    },[cart])

        const addItem= (item, qty)=>{
            if(isInCart(item.id)){
                const carritoActualizado = cart.map((prod)=>{
                    if(prod.id === item.id){
                        return {...prod, quantity: prod.quantity + qty}
                    }else{
                        return prod
                    }
                })
                setCart(carritoActualizado)
            }else{
                setCart([...cart, {...item, quantity:qty}])
            }
        }

        const clear = ()=>{
            setCart([])
        }

        const removeItem = (id) =>{
            setCart(cart.filter((prod)=> prod.id !== id))
        }

        const cartTotal = ()=>{
            return cart.reduce((acc, prod)=> acc += prod.quantity * prod.price,0)
        }

        const cartQuantity = ()=>{
            return cart.reduce((acc, prod) => acc += prod.quantity,0)
        }

        const isInCart = (id) =>{
            return cart.some((prod)=> prod.id === id)
        }

        const itemQuantity = (id)=>{
            const itemInCart = cart.find((item)=> item.id === id)
            if(itemInCart){

                return itemInCart.quantity
            }else{

                return 0
            }
        }
  return(
        <CartContext.Provider value={{cart, clear, addItem, removeItem, cartQuantity, cartTotal, itemQuantity}}>
                {children}
        </CartContext.Provider>
    )
}
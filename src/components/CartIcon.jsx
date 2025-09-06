import { BsCart4 } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Badge from 'react-bootstrap/Badge';

const CartIcon = () => {
const {cartQuantity}= useContext(CartContext)

return(
    <>
    <BsCart4 fontSize={'1.6rem'}/>
     <Badge bg="danger">{cartQuantity()}</Badge> 
    </>
)
}

export default CartIcon
import { Nav, Navbar } from "react-bootstrap"
import CartIcon from "./CartIcon"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const NavbarComponent = () =>{
    const {cart}= useContext(CartContext)
    return(
        <nav className="navContainer">
            <Navbar.Brand as={NavLink} to='/'>
                <img className="navbarLogo" src='/FantasyLogo.png' alt="Logo"/>
            </Navbar.Brand>
            <NavLink to='/categories/Cerveza' className="navLink">Cerveza</NavLink>
            <NavLink to='/categories/Hidromiel' className="navLink">Hidromiel</NavLink>
            <NavLink to='/categories/Sidra' className="navLink">Sidra</NavLink>
            <NavLink to='/categories/Vino' className="navLink">Vino</NavLink>
            <NavLink to='/categories/Top10' className="navLink">Productos top 10</NavLink>
            <NavLink to='/cart' style={{ textDecoration: 'none', color: 'inherit' }}>
  <CartIcon />
</NavLink>
        </nav>
    )
}
export default NavbarComponent
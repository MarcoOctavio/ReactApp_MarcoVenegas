import { Nav, Navbar } from "react-bootstrap"
import CarWidget from "./CarWidget"
import { NavLink } from "react-router-dom"

const NavbarComponent = () =>{
    return(
        <nav className="navContainer">
            <Navbar.Brand as={NavLink} to='/'>
                <img className="navbarLogo" src='/FantasyLogo.png' alt="Logo"/>
            </Navbar.Brand>
            <NavLink to='/categories/Cerveza' className="navLink">Cerveza</NavLink>
            <NavLink to='/categories/Hidromiel' className="navLink">Hidromiel</NavLink>
            <NavLink to='/categories/Sidra' className="navLink">Sidra</NavLink>
            <NavLink to='/categories/Vino' className="navLink">Vino</NavLink>
            <NavLink to='/categories/Top 10' className="navLink">Productos top 10</NavLink>
            <CarWidget counter={15}/>
        </nav>
    )
}
export default NavbarComponent
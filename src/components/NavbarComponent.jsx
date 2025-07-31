import { Nav, NavLink } from "react-bootstrap"
import CarWidget from "./CarWidget"

const NavbarComponent = () =>{
    return(
        <nav className="navContainer">
            <NavLink to='/'>
                <img className="navbarLogo" src="../FantasyLogo.png" alt="Logo" />
            </NavLink>
            <NavLink to='/category/cerveza' className="navLink">Cerveza</NavLink>
            <NavLink to='/category/hideomiel' className="navLink">Hidromiel</NavLink>
            <NavLink to='/category/sidra' className="navLink">Sidra</NavLink>
            <NavLink to='/category/vino' className="navLink">Vino</NavLink>
            <NavLink to='/category/top10' className="navLink">Productos top 10</NavLink>
            <CarWidget counter={15}/>
        </nav>
    )
}
export default NavbarComponent
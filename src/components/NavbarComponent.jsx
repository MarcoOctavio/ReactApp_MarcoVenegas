import CarWidget from "./CarWidget"

const NavbarComponent = () =>{
    return(
        <nav className="navContainer">
            <a className='aLink'>Fantasy Ferment Shop</a>
            <a className='aLink'>Cerveza</a>
            <a className='aLink'>Hidromiel</a>
            <a className="aLink">Sidra</a>
            <a className="aLink">Vinos</a>
            <a className='aLink'>El Top 10</a>
            <CarWidget counter={15}/>
        </nav>
    )
}
export default NavbarComponent
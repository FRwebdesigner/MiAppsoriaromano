import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


console.log(NavLink)

const NavbarComponent = () => {
    return (
    <nav class="navContainer">
        <a className='aLink'>Tienda</a>
        <a className='aLink'>Productos</a>
        <a className='aLink'>Ofertas</a>
        <a className='aLink'>Destacados</a>
        <CartWidget counter={1}/>
    </nav>
    )
}

export default NavbarComponent
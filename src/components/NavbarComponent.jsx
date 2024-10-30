import CartWidget  from "./CartWidget"
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
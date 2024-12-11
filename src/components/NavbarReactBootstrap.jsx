import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetReactIcons from './CartWidgetReactIcons';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
function NavbarReactBootstrap() {

  const {cartQuantity} = useCart()
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand to='/' style={{fontWeight:'bolder', color:'purple', backgroundColor:"aqua"}} as={NavLink}>PetShopStore 😺🐶🧶🦴</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" style={{backgroundColor:"white"}}>
          <Nav className="me-auto">
            <Nav.Link to='/' style={{fontWeight:'bolder', color:'violet'}} as={NavLink}>Home</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item  style={{fontWeight:'bolder', color:'brown'}} as={NavLink} to='/products/mas vendidos'>Más Vendidos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  style={{fontWeight:'bolder', color:'blue'}} as={NavLink} to='/products/ofertas'>
                Ofertas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item   style={{fontWeight:'bolder', color:'turquoise'}} as={NavLink} to='/products/nuevos'>Nuevos Ingresos</NavDropdown.Item>
             
             
            </NavDropdown>
          </Nav>
          {cartQuantity() > 0 && <NavLink to='/cart' style={{textDecoration:'none'}}>
              <CartWidgetReactIcons/>
            </NavLink>} 
            <NavLink to='/cart' style={{textDecoration:'none'}}>
              <CartWidgetReactIcons/>
            </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarReactBootstrap;
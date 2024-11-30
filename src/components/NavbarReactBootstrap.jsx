import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetReactIcons from './CartWidgetReactIcons';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

function NavbarReactBootstrap() {
  const {cartQty}=useContext(CartContext)
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to='/'>PetShopStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/category/mas vendidos'>Más Vendidos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/category/ofertas'>
                Ofertas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/category/nuevos'>Nuevos Ingresos</NavDropdown.Item>
             
             
            </NavDropdown>
          </Nav>
          {/* //Pueden hacerlo asi */}
         {/* { cartQty() > 0 && <NavLink style={{textDecoration:'none'}} to='/cart'><CartWidgetReactIcons/></NavLink>} */}
         {/* La logica la hago en CARTwIDGET */}
         <NavLink style={{textDecoration:'none'}} to='/cart'><CartWidgetReactIcons/></NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarReactBootstrap;
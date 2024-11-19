import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap';
import  Nav  from 'react-bootstrap';
import  Navbar  from 'react-bootstrap';
import {NavLink} from 'react-bootstrap';
import CartWidgetReactIcons from './CartWidgetReactIcons';
function NavbarReactBootstrap() {
  console.log('Navbar')
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand to='/' as={NavLink}>CoderShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/products/mas vendidos'>Más Vendidos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  as={NavLink} to='/products/ofertas'>
                Ofertas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  as={NavLink} to='/products/nuevos'>Nuevos Ingresos</NavDropdown.Item>
             
             
            </NavDropdown>
          </Nav>
          <CartWidgetReactIcons/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarReactBootstrap
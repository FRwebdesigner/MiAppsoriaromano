import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const CartWidgetReactIcons = () =>{
    return(
        <div>
            <BsCart4 fontSize={'1.5rem'} color='violet'/>
            <Badge bg="danger">15</Badge>
        </div>
    )
}

export default CartWidgetReactIcons
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const CartWidget = ({counter}) => {
    
    return(
        <div className="cartWidgetContainer">
            <img src='./shopping-and-commerce.png' alt='cart' className="cartIcon"/>
            <p class="cartCounter">{counter}</p>
        </div>
    )
}

export default CartWidget
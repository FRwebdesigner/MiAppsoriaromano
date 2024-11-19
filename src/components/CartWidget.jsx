import  BsCart4  from "react-icons/bs"
import  Badge  from "react-bootstrap"

const CartWidget = ({counter}) => {
    
    return(
        <div className="cartWidgetContainer">
            <img src='./shopping-and-commerce.png' alt='cart' className="cartIcon"/>
            <p class="cartCounter">{counter}</p>
        </div>
    )
}

export default CartWidget
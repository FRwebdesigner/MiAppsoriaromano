import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { CartContext, useCart } from '../context/CartContext'

const ItemDetail = ({producto}) => {
    const [compra, setCompra] = useState(false)
    // const {addToCart}= useContext(CartContext)
    const {addToCart, itemQuantity}= useCart()
    const onAdd = (cantidad) =>{
      setCompra(true)
      let cartItem = {
        name: producto.name,
        img: producto.img,
        price: producto.price,
        stock:producto.stock,
        id:producto.id 
      }
        addToCart(cartItem, cantidad)
      addToCart(producto, cantidad)
    }
   
  return (
    <div>
        <h1>Detalle de nuestra mascota:{producto.name}</h1>
        <img src={producto.img} alt={producto.img}/>
        <p>{producto.description}</p>
        <p>${producto.price}</p>
 {compra 
 ? <div>
  <Link className='btn btn-dark' to='/'>Click para seguir comprando</Link>
    <Link className='btn btn-dark' to='/cart'>Ir al carrito</Link>
  </div> 
 : <ItemCount stock={producto.stock} onAdd={onAdd}/>
 }
    </div>
  )
}

export default ItemDetail
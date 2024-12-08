import React, {useState} from 'react'

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(1)

    const sumar = () =>{
        if(count < stock){

            setCount(count + 1 )
        }
    }

    const restar = () =>{
        if(count > 1){
            setCount(count-1)
        }
    }

    console.log('SoyItemCount')

    const handleOnAdd = () =>{
        if(stock !== 0){
            onAdd(count)
        }
    }

  return (
   <div>
    <div>
    <button className='btn btn-success' onClick={restar}>-</button>
        <span className='btn '>{count}</span>
        <button className='btn btn-danger' onClick={sumar}>+</button>
    </div>
    <button className='btn btn-primary' onClick={handleOnAdd} disabled={stock === 0 || count === 0}>Agregar al carrito</button>
  
   </div>
  )
}

export default ItemCount
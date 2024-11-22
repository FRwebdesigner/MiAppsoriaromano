import ItemCount from './ItemCount';
import React from 'react';


export const ItemListContainer = ({ texto }) => {

    const onAdd = (quantity) =>{
        alert(`Felicidades! Has adoptado ${quantity} mascota`) 
        alert(`Compra realizada con exito`) 
    }

    return (
        <>
            <h1 greeting={texto} />
            <ItemCount initial={3} stock={5} onAdd={onAdd} />
        </>
    );
}

export default ItemListContainer;
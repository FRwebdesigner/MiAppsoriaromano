import ItemCount from './ItemCount';
import React from 'react';


export const ItemListContainer = ({ texto }) => {

    const onAdd = (quantity) =>{
        alert(`Compraste ${quantity} productos`)
    }

    return (
        <>
            <h1 greeting={texto} />
            <ItemCount initial={3} stock={5} onAdd={onAdd} />
        </>
    );
}

export default ItemListContainer;

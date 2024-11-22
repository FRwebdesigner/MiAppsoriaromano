import Item from './Item'
import React from 'react'

const ItemList = ({ data = [] }) => {
  return (
     data.map(pet => <Item key={pet.id} info={pet} />)
  );
}

export default ItemList
import React, { useEffect, useState } from 'react'
import { getOneProduct, getProducts } from '../mock/data'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const pet = { id: 1, image:'https://cdn-coodb.nitrocdn.com/YoOVXLwRMctAOcRroQYMJHRPeNnvDFno/assets/images/optimized/rev-261ca70/topcriadores.com/wp-content/uploads/2021/07/toy-buena.jpg', title: "Tienda De Mascotas" };

 export const ItemDetailContainer = () => {
        const [data, setData] = useState({});

        useEffect(() => {
          const getData = new Promise(resolve => {
              setTimeout(() => {
                  resolve(pet);
              }, 3000);
        });

             getData.then(res => setData(res));
      }, [])

       return (
        <ItemDetail data={data} />
       )

 }


export default ItemDetailContainer;
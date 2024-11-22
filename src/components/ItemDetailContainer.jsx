import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'

const pet = { id: 1, image:'https://cdn-coodb.nitrocdn.com/YoOVXLwRMctAOcRroQYMJHRPeNnvDFno/assets/images/optimized/rev-261ca70/topcriadores.com/wp-content/uploads/2021/07/toy-buena.jpg', title: "Caniche Toy" };

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
       );
 }

// const ItemDetailContainer = () => {
//     const [producto, setProducto]=useState({})
//     const { id } = useParams()
//     console.log(id)
//     useEffect(()=>{
//         getOneProduct(id)
//         .then((res)=> setProducto(res))
//         .catch((error)=>console.log(error))
     
//     },[])
//      useEffect(()=>{
//          getProducts()
//          .then((res)=> setProducto(res.find((item)=> item.id === '2')))
//         .catch((error)=>console.log(error))
//      },[])
//   return (
//     <div>
//         <ItemDetail producto={producto}/>
//     </div>
//   )
// }

export default ItemDetailContainer
import React, { useEffect, useState } from 'react'
import { getOneProduct, getProducts } from '../mock/data'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../services/Firebase'
import { BiFontSize } from 'react-icons/bi'

const ItemDetailContainer = () => {
    const [producto, setProducto]=useState({})
    const [loading, setLoading]= useState(false)
    const { id } = useParams()

    // SOLO PARA EL PRODUCTO GUARDADO EN FIREBASE

    // useEffect(()=>{
    //   setLoading(true)
    
    //   const collectionProd = collection(db, "productos")
    
    //   const docRef = doc(collectionProd,id )
      // const docRef = doc(db, "productos", id)
   
    //   getDoc(docRef)
    //   .then((res)=> setProducto({id: res.id, ...res.data()}))
    //   .catch((error)=> console.log(error))
    //   .finally(()=> setLoading(false))
    // },[])



    // SIRVE PARA TODOS LOS PRODUCTOS QUE ESTAN ALMACENADOS EN EL MOCK LOCAL

     useEffect(()=>{
     setLoading(true)
          getOneProduct(id)
         .then((res)=> setProducto(res))
          .catch((error)=>console.log(error))
          .finally(()=> setLoading(false))
      },[])
      useEffect(()=>{
          getProducts()
        .then((res)=> setProductos(res.find((item)=> item.id === '1')))
          .catch((error)=>console.log(error))
      },[])
  return (
    <div>
       {loading ? <Loader/> : <ItemDetail producto={producto}/>}
    </div>
  )
}

export default ItemDetailContainer
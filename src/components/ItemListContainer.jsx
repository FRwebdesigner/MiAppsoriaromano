import React, {useState, useEffect} from 'react'
import { getProducts, productosDB } from "../mock/data"
import ItemList from './ItemList'
import {  useParams } from 'react-router-dom'
import Loader from './Loader'
import {addDoc, collection, getDocs, query, where} from 'firebase/firestore'
import { db } from '../services/Firebase'

const ItemListContainer = ({greeting, texto}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading]= useState(false)
    const {category}= useParams()

    useEffect(()=>{
        setLoading(true)
        const productsCollection = category 
        ? query(collection(db, "productos"), where("category", "==", category)) 
        : collection(db,"productos")
        getDocs(productsCollection)
        .then((res)=>{
            const list = res.docs.map((product)=>{
                return{
                    id: product.id,
                    ...product.data()
                }
            })
            setProducts(list)
        } )
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[category])

     useEffect(()=>{
         setLoading(true)
         getProducts()
        .then((res)=>{
             if(category){

                 setProducts(res.filter((prod)=> prod.category === category ))
             }else{
                 setProducts(res)
             }
         })
         .catch((error)=> console.log(error))
         .finally(()=> setLoading(false))
     },[category])

     const addData = () =>{
         const collectionToAdd = collection(db, "productos")
         productosDB.map((item)=> addDoc(collectionToAdd, item))
     }

    return(
        <div>
     
          { <button onClick={addData}>Agregar a Firebase</button> }
            <h1 className="text-center">{greeting}<span style={{textTransform:'capitalize', color:'violet'}}>{category}</span></h1>
           {loading ? <Loader/>: <ItemList products={products}/>}
         </div>
    )
}
export default ItemListContainer
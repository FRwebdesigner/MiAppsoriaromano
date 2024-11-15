
import ItemCount from "./ItemCount"
const ItemListContainer = ({greeting, texto}) =>{

    console.log('ItemListContainer')
    const onAdd = (cantidad) =>{
        alert(`Agregaaste al carrito ${cantidad} productos`)
    }
    return(
        <div>
            <h1>{greeting}</h1>
            <p>{texto}</p>
            <itemCount stock={12} onAdd ={onAdd}/>
        </div>
    )
}

export default ItemListContainer
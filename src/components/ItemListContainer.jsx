
const ItemListContainer = ({greeting, texto}) =>{

    console.log('ItemListContainer')
    const onAdd = (cantidad) =>{
        alert(`Agregaaste al carrito ${cantidad} productos`)
    }
    return(
        <div>
            <h1>{greeting}</h1>
            <p>{texto}</p>
        </div>
    )
}

export default ItemListContainer
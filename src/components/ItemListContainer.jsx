import ItemCount from './ItemCount';
import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';

const pet =  [
    { id: 1, image:'https://cdn-coodb.nitrocdn.com/YoOVXLwRMctAOcRroQYMJHRPeNnvDFno/assets/images/optimized/rev-261ca70/topcriadores.com/wp-content/uploads/2021/07/toy-buena.jpg', title: "Caniche Toy" },
    { id: 2, image:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEix5-Of1L3gyaI2dEqNToKsX_KZF9pJmIU25aANysDYb1bj_6QonVx2oCEcPtGvn_kUM6I-B2KrMqpwqavFa2KVPomlIBpi7TFyWKq1zIaZ_wMe_fBeu1CZU1RI668FkklASDmVhc2e2_v6/s1600/Gato+tuxedo.jpg', title: "Gato Raza Tuxedo" },
    { id: 3, image:'https://cdn-coodb.nitrocdn.com/YoOVXLwRMctAOcRroQYMJHRPeNnvDFno/assets/images/optimized/rev-261ca70/topcriadores.com/wp-content/uploads/2021/07/toy-buena.jpg', title: "Gato Raza Golden" },
    { id: 4, image:'https://ohmydogmagazine.com.ar/wp-content/uploads/dog-germanshepherd-runa.jpg', title: "Ovejero Aleman" },
    { id: 5, image:'https://www.rover.com/blog/wp-content/uploads/white-cat-min-1200x675.jpg', title: "Gato Blanco" },
    { id: 6, image:'https://0d2ujxjiqkxw.cdn.shift8web.com/wp-content/uploads/husky.jpg', title: "Siberian" },
];

export const ItemListContainer = ({ texto }) => {
    const   [data, setData] = useState([])

    useEffect(() => {
      const getData = new Promise(resolve => {
        setTimeout(() => {
           resolve(pet)
        }, 3000);
      });
      getData.then(res => setData(res));

    }, [])

    const onAdd = (quantity) =>{
        alert(`Felicidades! Has adoptado ${quantity} mascota`); 
        alert(`Compra realizada con exito`);
    }

    return (
        <>
            <h1 greeting={texto} />
            <ItemCount initial={3} stock={5} onAdd={onAdd} />
            <ItemList data={data} />
        </>
    );
}

export default ItemListContainer;
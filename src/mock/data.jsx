const productos= [
    {
        id:'1',
        name:'Mascota 1',
        stock:475,
        price:500,
        description:'Caniche Toy',
        img:'https://cdn-coodb.nitrocdn.com/YoOVXLwRMctAOcRroQYMJHRPeNnvDFno/assets/images/optimized/rev-261ca70/topcriadores.com/wp-content/uploads/2021/07/toy-buena.jpg',
        category:'tienda'
    },
    {
        id:'2',
        name:'Mascota 2',
        stock:650,
        price:675,
        description:'Gato Raza Tuxedo',
        img:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEix5-Of1L3gyaI2dEqNToKsX_KZF9pJmIU25aANysDYb1bj_6QonVx2oCEcPtGvn_kUM6I-B2KrMqpwqavFa2KVPomlIBpi7TFyWKq1zIaZ_wMe_fBeu1CZU1RI668FkklASDmVhc2e2_v6/s1600/Gato+tuxedo.jpg',
        category:'ofertas'
    },
    {
        id:'3',
        name:'Mascota 3',
        stock:840,
        price:865,
        description:'Gato Raza Golden',
        img:'https://res.cloudinary.com/postedin/image/upload/d_mascotas:no-image.jpg,w_900,c_thumb,f_auto,q_80/mascotas/i-12235.jpeg',
        category:'tienda'
    },
    {
        id:'4',
        name:'Mascota 4',
        stock:550,
        price:575,
        description:'Ovejero Aleman',
        img:'https://ohmydogmagazine.com.ar/wp-content/uploads/dog-germanshepherd-runa.jpg',
        category:'ofertas'
    },
    {
        id:'5',
        name:'Mascota 5',
        stock:500,
        price:550,
        description:'Gato Blanco',
        img:'https://www.rover.com/blog/wp-content/uploads/white-cat-min-1200x675.jpg',
        category:'ofertas'
    },
    {
        id:'6',
        name:'Mascota 6',
        stock:1900,
        price:2000,
        description:'Siberian',
        img:'https://0d2ujxjiqkxw.cdn.shift8web.com/wp-content/uploads/husky.jpg',
        category:'nuevos ingresos'
    }
]

export const getProducts = () =>{
  
    let error = false
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error, intente mas tarde')
            }else{
                resolve(productos)
            
            }
        },3000)
    })
}


export const getOneProduct = (id)=>{
    let error=false
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!error){
                let product = productos.find((item)=> item.id === id)
                resolve(product)
            }else{
                reject('No hay data')
            }
        },3000)
    })
}
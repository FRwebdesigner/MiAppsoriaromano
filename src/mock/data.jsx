const productos= [
    {
        id:'1',
        name:'Caniche Toy Marron',
        stock:475,
        price:500,
        description:'Caniche Toy',
        img:'https://cdn-coodb.nitrocdn.com/YoOVXLwRMctAOcRroQYMJHRPeNnvDFno/assets/images/optimized/rev-261ca70/topcriadores.com/wp-content/uploads/2021/07/toy-buena.jpg',
        category:'mas vendidos'
    },
    {
        id:'2',
        name:'Gato Raza Tuxedo',
        stock:650,
        price:675,
        description:'Gato Raza Tuxedo',
        img:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEix5-Of1L3gyaI2dEqNToKsX_KZF9pJmIU25aANysDYb1bj_6QonVx2oCEcPtGvn_kUM6I-B2KrMqpwqavFa2KVPomlIBpi7TFyWKq1zIaZ_wMe_fBeu1CZU1RI668FkklASDmVhc2e2_v6/s1600/Gato+tuxedo.jpg',
        category:'ofertas'
    },
    {
        id:'3',
        name:'Gato Raza Golden',
        stock:840,
        price:865,
        description:'Gato Raza Golden',
        img:'https://res.cloudinary.com/postedin/image/upload/d_mascotas:no-image.jpg,w_900,c_thumb,f_auto,q_80/mascotas/i-12235.jpeg',
        category:'ofertas'
    },
    {
        id:'4',
        name:'Ovejero Aleman',
        stock:550,
        price:575,
        description:'Ovejero Aleman',
        img:'https://ohmydogmagazine.com.ar/wp-content/uploads/dog-germanshepherd-runa.jpg',
        category:'ofertas'
    },
    {
        id:'5',
        name:'Gato Blanco',
        stock:500,
        price:550,
        description:'Gato Blanco',
        img:'https://www.rover.com/blog/wp-content/uploads/white-cat-min-1200x675.jpg',
        category:'mas vendidos'
    },
    {
        id:'6',
        name:'Siberian',
        stock:1900,
        price:2000,
        description:'Siberian',
        img:'https://0d2ujxjiqkxw.cdn.shift8web.com/wp-content/uploads/husky.jpg',
        category:'nuevos'
    },
    {
        id:'7',
        name:'Gato Gris',
        stock:800,
        price:850,
        description:'Gato Gris',
        img:'https://cdn.skoon.com.mx/wp-content/uploads/2021/07/13115043/gato-British-Shorthair-1024x682.jpg',
        category:'nuevos'
    },
    {
        id:'8',
        name:'Perro Salchicha',
        stock:1000,
        price:1150,
        description:'Perro Salchicha',
        img:'https://www.hola.com/horizon/landscape/d1eaad20c4c6-adobestock47432136.jpg?im=Resize=(640),type=downsize',
        category:'nuevos'
    },
    {
        id:'9',
        name:'Perro Gris',
        stock:1300,
        price:1400,
        description:'Perro Gris',
        img:'https://i.pinimg.com/736x/67/33/2a/67332af3551d48ebbe44bd54806a3b42.jpg',
        category:'nuevos'
    },
    {
        id:'10',
        name:'Gato Marrón',
        stock:950,
        price:975,
        description:'Gato Marrón',
        img:'https://i0.wp.com/luccalaloca.es/wp-content/uploads/2024/03/Depositphotos_7879319_S.jpg?ssl=1',
        category:'nuevos'
    },

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
const productos= [
    {
        id:'1',
        name:'Mascota 1',
        stock:475,
        price:500,
        description:'Caniche Toy',
        img:'',
        category:'tienda'
    },
    {
        id:'2',
        name:'Mascota 2',
        stock:650,
        price:675,
        description:'Gato Raza Tuxedo',
        img:'',
        category:'ofertas'
    },
    {
        id:'3',
        name:'Mascota 3',
        stock:840,
        price:865,
        description:'Gato Raza Golden',
        img:'',
        category:'tienda'
    },
    {
        id:'4',
        name:'Mascota 4',
        stock:550,
        price:575,
        description:'Ovejero Aleman',
        img:'',
        category:'ofertas'
    },
    {
        id:'5',
        name:'Mascota 5',
        stock:500,
        price:550,
        description:'Gato Blanco',
        img:'',
        category:'ofertas'
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
import React,{useState} from "react"


const Eventos = () => {
    const [name, setName] = useState ('')
    const nameHandler = (e) => {
        setName(e.target.value)
    }
    const noVocales = (e) =>{
          if('aeiou'.includes(e.key.toLowerCase())){
            e.preventDefault()
          }
    }
    return (
        <div>
          <p>{Name}</p>
          <input 
          type='text'
          placeholder='Completar con nombre completo' 
          name='Nombre'
          onChange={nameHandler}
            />
            <input type='text' placeholder='No vocales' onKeyDown={noVocales}/>
          </div>
    )
}


export default Eventos
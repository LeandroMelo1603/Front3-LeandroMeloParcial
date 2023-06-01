import React, { useState } from 'react'
import Card from './Card'

const Form = () => {

const [user, setUser] = useState (
        {
            nombre: '',
            apellido:'',
            edad: 0,
            pokemon: ''
        }
)
const [show, setShow] = useState(false)
const [error, setError] = useState(false)

const botonSubmit = (e) => {
    e.preventDefault()
    if( user.nombre.length > 3 && 
        user.nombre.trim() && 
        user.apellido.length > 3 &&
        user.apellido.trim()  &&
        user.edad > 0 && 
        user.pokemon.length > 6 ){

        setShow(true)
        setError(false)
    }else {
        setError(true)
    }
    
}

return (
    <div>
        
        <form className='form' onSubmit={botonSubmit}>

            <label htmlFor="">Nombre</label>
            <input type="text" disabled= {show} onChange={(event)=> setUser({...user, nombre:event.target.value})}/>

            <label htmlFor="">Apellido</label>
                <input type="text" disabled= {show} onChange={(event)=> setUser({...user, apellido:event.target.value})}/>

            <label htmlFor=""> Edad </label>
                <input type="number" disabled= {show} onChange={(event)=> setUser({...user, edad:event.target.value})}/>

            <label htmlFor="">Pokemon Favorito</label>
                <input type="text" disabled= {show} onChange={(event)=> setUser({...user, pokemon:event.target.value})}/>

        <button>Enviar</button>

        </form>
        
        {
            show ?

            <Card user = {user}/>
            :

            null
    
        }

        {
            error ?

            <div>
                <h2 style={{color:'red'}}> Por favor chequea que la información sea correcta. Hiciste llorar a Pikachu &#x1F614;</h2>
                <img src="https://i.gifer.com/5s88.gif" alt="" className='imgPikachu' />
            </div>
            
            :
            null
    
        }
    </div>
)
}

export default Form
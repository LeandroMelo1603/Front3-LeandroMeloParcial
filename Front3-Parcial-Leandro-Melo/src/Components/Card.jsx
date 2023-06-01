import React from 'react'

const Card = ({user}) => {
return (
    <div>

        <div className='card' style={{backgroundColor: '#f2f2f2',
        borderRadius: '10px',
        marginTop: '40px',
        marginLeft:'80px',
        padding: '20px',
        width: '300px',
        textAlign: 'center',
        transition: 'transform 9.39 ease'}}>

        <h3 style={{
            color: '#333333',
            fontSize: '24px',
            marginBottom: '10px'}}> Hola {user.nombre} {user.apellido}</h3>
        <h4 style={{
            color: '#666666',
            fontSize: '18px',
            marginBottom: '15px'}}>Tu edad es: {user.edad}</h4>
        <h4 style={{color: '#666666',
            fontSize: '18px',
            marginBottom: '15px'}}>Tu pokemon favorito es: {user.pokemon} !! </h4>

        <img src="https://64.media.tumblr.com/f8cb5aa6c6324c4fe3f88f9f5f331a17/d750705054700592-ca/s540x810/ed7fa0a7f3af0c11a09967b9663fde31b03081e3.gif" alt="" />
        </div>
        
        
    </div>
    
)
}

export default Card
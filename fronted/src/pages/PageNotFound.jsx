import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/pageNotFound.css';

const PageNotFound = () => {
    return (
        <div className='error'>
            <div className='error__tittle'>
                <h1>Pagina no encontrada</h1>
            </div>
            <div>
                <Link to="/"><p className='error__link'>Volver a inicio</p></Link>
            </div>
        </div>
    )
}

export default PageNotFound

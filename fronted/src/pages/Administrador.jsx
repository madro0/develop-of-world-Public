import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
// importe de los estilos
import '../styles/private.css';

const Admnistrador = () => {
    return (
        <div className="private">
            <Header />
            <Outlet /> {/*acá se renderizara cada una de las paginas, es casi como un prop */}
            <div className='piePagina'>
                <Footer />
            </div>
        </div>
    )
}

export default Admnistrador

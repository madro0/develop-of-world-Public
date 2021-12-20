import React from 'react'
import { Outlet } from 'react-router-dom';
import HeaderEstudiante from '../components/HeaderEstudiante';
import Footer from '../components/Footer';
import '../styles/headerEstudiante.css';

const Estudiante = () => {
    return (
        <div className='student'>
            <div>
                <HeaderEstudiante />
            </div>
            <div>
                <Outlet />
            </div>
            <div className='piePagina'>
                <Footer />
            </div>
        </div>
    )
}

export default Estudiante

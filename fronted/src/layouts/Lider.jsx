import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderLider from '../components/HeaderLider';
import '../styles/lider.css';

const Lider = () => {
    return (
        <div className='lider'>
            <div>
            <HeaderLider />
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

export default Lider

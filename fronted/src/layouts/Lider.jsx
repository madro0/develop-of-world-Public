import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderLider from '../components/HeaderLider';

const Lider = () => {
    return (
        <div>
            <HeaderLider />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Lider

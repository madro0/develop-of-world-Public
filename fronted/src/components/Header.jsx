import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>Proyectos S.A.S</h1>
            <nav>
                <ul>
                    <Link to="/administrador/UserRegistered"><li>Registered Users</li></Link>
                    <Link to="/administrador/Projects"><li>Projects</li></Link>
                    <Link to="/administrador/Profile"><li>Profile</li></Link>
                    <Link to="/"><li>Salir</li></Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header

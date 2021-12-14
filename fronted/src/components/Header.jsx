import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>Proyectos S.A.S</h1>
            <nav>
                <ul>
                    <Link to="/private/UserRegistered"><li>Registered Users</li></Link>
                    <Link to="/private/Projects"><li>Projects</li></Link>
                    <Link to="/"><li>Salir</li></Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header

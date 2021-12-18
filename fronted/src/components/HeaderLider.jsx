import React from 'react'
import '../styles/headerLider.css';
import { Link } from 'react-router-dom';

const HeaderLider = () => {
    return (
        <header className="headerLider">
            <div HeaderLider__tittle>
                <h1>Proyectos S.A.S</h1>
            </div>
            <nav>
                <ul>
                    <Link to="/lider/StudentRegistered"><li>Registered Student</li></Link>
                    <Link to="/lider/Projects"><li>Projects</li></Link>
                    <Link to="/lider/Projects/newproject"><li>Nuevo projecto</li></Link>
                    <Link to="/lider/MyProjects"><li>My Projects</li></Link>
                    <Link to="/lider/Requests"><li>Requests</li></Link>
                    <Link to="/lider/Profile"><li>Profile</li></Link>
                    <Link to="/"><li>Salir</li></Link>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderLider

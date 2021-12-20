import React from 'react';
import { Link } from 'react-router-dom';

const HeaderEstudiante = () => {
    return (
        <header className="headerEstudiante">
            <div className="HeaderEstudiante__tittle">
                <h1>Proyectos S.A.S</h1>
            </div>
            <nav>
                <ul>
                    <Link to="/estudiante/proyectos"><li>Projects</li></Link>
                    <Link to="/estudiante/projectsEstudent"><li>My Projects</li></Link>
                    <Link to="/estudiante/Profile"><li>Profile</li></Link>
                    <Link to="/"><li>Salir</li></Link>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderEstudiante

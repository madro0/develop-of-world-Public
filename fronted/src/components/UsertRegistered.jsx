import React from 'react'
import '../styles/userRegistered.css';
import Header from './Header';
import Footer from '../components/Footer';

const UserRegistered = () => {
    // lo que vera tanto el lider como el administrador a la hora de ver los usuarios registrados
    return (
        <div>
            <Header />
            <div className="tableUsers">
                <table>
                    <thead className="tableUsers__thead">
                        <tr className="tableUsers__tittle">
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>

                    <tbody className="tableUsers__data">
                        <tr>
                            <td>789465</td>
                            <td>Juan Fernando</td>
                            <td>Juanfed12345@gmail.com</td>
                            <td>Autorizado</td>
                            <td><button>Editar Estado</button></td>
                        </tr>
                        <tr>
                            <td>789485</td>
                            <td>Alexandra Herrera</td>
                            <td>AlexaFernandes@outlook.com</td>
                            <td>Autorizado</td>
                            <td><button>Editar Estado</button></td>
                        </tr>
                        <tr>
                            <td>119465</td>
                            <td>Diego Quiroz</td>
                            <td>Dieguito123@gmail.com</td>
                            <td>No Autorizado</td>
                            <td><button>Editar Estado</button></td>
                        </tr>
                        <tr>
                            <td>119465</td>
                            <td>Carla</td>
                            <td>Carla24@gmail.com</td>
                            <td>No Autorizado</td>
                            <td><button>Editar Estado</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
            </div>
            <Footer />
        </div>
    )
}

export default UserRegistered

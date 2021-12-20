import React from 'react';
import '../styles/studentRegistered.css';

const StudentRegistered = () => {
    return (
        <div className='student__table'>
            <div>
                <table>
                    <thead className="student__thead">
                        <tr className="student__tittle">
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Estado</th>
                            <th>ID Projet</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>

                    <tbody className="student__data">
                        <tr>
                            <td>789465</td>
                            <td>Juan Fernando</td>
                            <td>Juanfed12345@gmail.com</td>
                            <td>Autorizado</td>
                            <td>125476</td>
                            <td><button>Editar Estado</button></td>
                        </tr>
                        <tr>
                            <td>789485</td>
                            <td>Alexandra Herrera</td>
                            <td>AlexaFernandes@outlook.com</td>
                            <td>Autorizado</td>
                            <td>125476</td>
                            <td><button>Editar Estado</button></td>
                        </tr>
                        <tr>
                            <td>119465</td>
                            <td>Diego Quiroz</td>
                            <td>Dieguito123@gmail.com</td>
                            <td>No Autorizado</td>
                            <td>125476</td>
                            <td><button>Editar Estado</button></td>
                        </tr>
                        <tr>
                            <td>119465</td>
                            <td>Carla</td>
                            <td>Carla24@gmail.com</td>
                            <td>No Autorizado</td>
                            <td>125476</td>
                            <td><button>Editar Estado</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StudentRegistered

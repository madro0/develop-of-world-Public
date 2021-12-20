import React from 'react'

const ProjectsEstudent = () => {
    return (
        <div className='MyProjects'>
                <div className='MyProjects__table'>
                    <table>
                        <thead className="MyProjects__thead">
                            <tr className="MyProjects__tittle">
                                <th className='MyProjects--id'>ID</th>
                                <th>Nombre</th>
                                <th>Aprovacion</th>
                                <th>Estado</th>
                                <th>Proceso</th>
                                <th>Foco General</th>
                                <th>Focos Espesifico</th>
                                <th>Presupuesto</th>
                                <th>Editar</th>
                            </tr>
                        </thead>

                        <tbody className="MyProjects__data">
                            <tr>
                                <td projects__id>789465</td>
                                <td>Reparacion de calles</td>
                                <td>Aprovado</td>
                                <td>Autorizado</td>
                                <td>En desarrollo</td>
                                <td>Mejorar el estado de las vias</td>
                                <td>Tapar los huecos de las calles</td>
                                <td>80.456.000</td>
                                <td><button>Editar Estado</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    )
}

export default ProjectsEstudent

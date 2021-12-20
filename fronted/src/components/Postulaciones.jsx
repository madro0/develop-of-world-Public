import React from 'react'

const Postulaciones = () => {
    return (
        <div className='projects'>
            <div>
                <table>
                    <thead className="projects__thead">
                        <tr className="projects__tittle">
                            <th className='projects--id'>ID</th>
                            <th>Nombre</th>
                            <th>Aprovacion</th>
                            <th>Estado</th>
                            <th>Proceso</th>
                            <th>Foco General</th>
                            <th>Focos Espesifico</th>
                            <th>Presupuesto</th>
                            <th>Postulaciones</th>
                        </tr>
                    </thead>

                    <tbody className="projects__data">
                        <tr>
                            <td projects__id>789465</td>
                            <td>Reparacion de calles</td>
                            <td>Aprovado</td>
                            <td>Autorizado</td>
                            <td>En desarrollo</td>
                            <td>Mejorar el estado de las vias</td>
                            <td>Tapar los huecos de las calles</td>
                            <td>80.456.000</td>
                            <td><button>Postularse</button></td>
                        </tr>
                        <tr>
                            <td projects__id>789465</td>
                            <td>Reparacion de calles</td>
                            <td>Aprovado</td>
                            <td>Autorizado</td>
                            <td>En desarrollo</td>
                            <td>Mejorar el estado de las vias</td>
                            <td>Tapar los huecos de las calles</td>
                            <td>80.456.000</td>
                            <td><button>Postularse</button></td>
                        </tr>
                        <tr>
                            <td projects__id>789465</td>
                            <td>Reparacion de calles</td>
                            <td>Aprovado</td>
                            <td>Autorizado</td>
                            <td>En desarrollo</td>
                            <td>Mejorar el estado de las vias</td>
                            <td>Tapar los huecos de las calles</td>
                            <td>80.456.000</td>
                            <td><button>Postularse</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Postulaciones

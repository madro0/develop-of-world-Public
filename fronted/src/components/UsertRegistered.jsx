import React, { useEffect } from 'react'
import '../styles/userRegistered.css';
import { useQuery } from '@apollo/client';
import {GET_USERS} from '../graphql/user/queries';
import  { toast } from 'react-toastify';
import { Enum_Role, Enum_StateUser } from '../helpers/enums/enums';

const UserRegistered = () => {
    const {data, error, loading} = useQuery(GET_USERS);

    useEffect(()=>{
        if(error){
            toast.error('Error consultado usuarios');
        }
    })

    if(loading) return <div>Cargando...</div>
    // lo que vera tanto el lider como el administrador a la hora de ver los usuarios registrados
    return (
        <div className="tableUsers">
            <div>
                <table className='tableUsers__table'>
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
                        {
                        data.Users.map((item)=>(
                            <tr key={item._id}>
                                <td>{item._id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{Enum_Role[item.role]}</td>
                                <td><button>Editar Estado</button></td>
                            </tr>
                        ))
                    }

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default UserRegistered

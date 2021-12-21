import React,  { useEffect } from 'react'
import '../styles/projects.css';
import {useQuery, useMutation } from '@apollo/client';
import { PROJECTS } from '../graphql/project/queries';
import { DELETE_PROJECT } from '../graphql/project/mutations';
import { Enum_StateProyect, Enum_TypeObjective } from '../helpers/enums/enums';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const Projects = () => {
    const {data, error, loading} = useQuery(PROJECTS);

    const [deleteProject, {data: dataMutationDeleted, loading: eliminarLoading}] = useMutation(DELETE_PROJECT,{
        refetchQueries:[{ query: PROJECTS}]
    })
    
    useEffect(()=>{
        
        if(error){
            toast.error('Error consultado usuarios');
        }
    })

    

    useEffect(()=>{
        if(dataMutationDeleted){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Proyecto eliminado correctamente',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }, [dataMutationDeleted]);

    const submitDeleteProject = (idProject) =>{
        deleteProject({variables:{id:idProject}})
    }

    if(loading) return <div>Cargando...</div>

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
                            <th>Fase</th>
                            <th>Foco General</th>
                            <th>Focos Espesifico</th>
                            <th>Lider</th>
                            <th>Editar</th>
                        </tr>
                    </thead>

                    <tbody className="projects__data">
                        {/* {console.log(data)} */}
                        {
                            data.Projects.map((itemProject, index)=>(
                                <tr key={index}>
                                    <td >{itemProject._id}</td>
                                    <td>{itemProject.name}</td>
                                    <td>Aprovado</td>
                                    <td>{itemProject.state}</td>
                                    <td>{itemProject.phase}</td>

                                    {
                                        itemProject.objectives[0] ?
                                            itemProject.objectives[0].type == "GENERAL" ? (<td>{itemProject.objectives[0].description}</td>) : (<td></td>)
                                        : <td></td>   
                                    }
                                    {
                                        itemProject.objectives[1] ?
                                            itemProject.objectives[1].type == "ESPECIFICO" ? (<td>{itemProject.objectives[1].description}</td>) : (<td></td>)
                                        : <td></td>   
                                    }
                                    
                                    {/* <td>{itemProject.objectives.type = "ESPECIFICO"? "ESPECIFICO" :""}</td> */}
                                    <td>{`${itemProject.leader.name} ${itemProject.leader.lastName}` }</td>
                                    <td>
                                        <button onClick={()=>submitDeleteProject(itemProject._id)} className='icon' >
                                            <i className='bx bxs-trash' ></i>
                                        </button>

                                        {/* <button className='icon'>
                                            <i className='icon bx bxs-edit-alt' ></i>
                                        </button> */}
                                    </td>
                                </tr>
                            ))
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Projects

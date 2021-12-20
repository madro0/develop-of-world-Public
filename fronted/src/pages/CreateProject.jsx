import React from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_PROJECT } from '../graphql/project/mutations';
import { useForm } from '../hooks/useForm';
import Swal from 'sweetalert2';

export const CreateProject = () =>{

    const[formValues, handleInputChange, handleInputChangeSelect, inputChange] = useForm({
        name: '',
        id: '',
        startDate: new Date(2021,10,10),
        endDate: new Date(2022,10,10),
        leader: '61b18ddf0e4e2df6a34bd393',
        state: "ACTIVO",
        phase: "INICIADO"
        
        // description
    })
    const {name,id, startDate,endDate, leader, general, especifico  } = formValues
    

    const[newProject, {data, loading, error}] = useMutation(CREATE_PROJECT,{

        onError: () => {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Tu proyecto no fue guardado',
                showConfirmButton: false,
                timer: 1500
              })
        },
        onCompleted: () => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Nuevo proyecto agregado correctamente',
                showConfirmButton: false,
                timer: 1500
              })
        }
    }); 

    const submitForma = (e)=>{
        e.preventDefault();
        // console.log(formValues);
        newProject({ 
            variables: formValues
        });
    }
    
    // if(loading) return  "cargando...";
    
    // if(error) return `submission error! ${error.message}`;

    return (
        <div>
            <div className="section products">
            <div className="product__info">
                <h1 className="producto__info-title">Proyecto</h1>
                <form onSubmit={submitForma}>
                    <div className="grid-form">
                         <div className="input">
                            <label>Nombre del projecto</label>
                            <input type="text" placeholder="Operacion 474"  name="name" value={name} onChange={handleInputChange}/>
                        </div>
                        <div className="input">
                            <label>Identificador</label>
                            <input type="number" placeholder='61abfcb5bd543aa94fdd89f4' name="name" value={id} onChange={handleInputChange} disabled/>
                        </div>
                        <div className="input">
                            <label>Fecha de inicio</label>
                            <input type="date" name="stock"  name="startDate" value={startDate} onChange={handleInputChange}/>
                        </div>
                        <div className="input">
                            <label>Fecha de Finalizacion</label>
                            <input type="date" name="endDate" value={endDate} onChange={handleInputChange}/>
                        </div>
                        {/* <div className="input">
                            <label>Fase</label>
                            <select  name="provider"  >
                                <option value="" disabled>Selecciona una opcion</option>
                                <option value="INICIADO" >INICIADO</option>
                                <option value="FINALIZADO" >FINALIZADO</option>
                            </select>
                        </div> */}
                        {/* <div className="input">
                            <label>Estado</label>
                            <select  name="provider"  >
                                <option value="" disabled>Selecciona una opcion</option>
                                <option value="ACTIVO" >ACTIVO</option>
                                <option value="INACTIVO" >INACTIVO</option>
                            </select>
                        </div>
                        <div className="input">
                            <label>Objetivos</label>
                            <select  name="provider" value={}  >
                                <option value="" disabled>Selecciona una opcion</option>
                                <option value="GENERAL" >GENERAL</option>
                                <option value="ESPECIFICO" >ESPECIFICO</option>
                            </select>
                        </div>*/}
                        <button type="submit" className="button" >
                            <i className='bx bx-plus-circle'></i>    
                            CREAR PROYECTO
                        </button>
                    </div> 
                           
                </form>

                
                
            </div>
             <hr/>                     
            {/* <div className="product__list">
                <h2 className="product__list-tittle">Descripcion de Objectivo</h2>
                <div className="input product__search">
                    {type = "GENERAL" ?  (<input type="text"  placeholder="Descripcion..."  value={general}/>): ((<input type="text"  placeholder="Descripcion..."  value={especifico}/>))} 
                </div>
               
            </div> */}
            </div>
        </div>
    )
};


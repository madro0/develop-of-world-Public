import React from 'react';
import { useForm } from '../hooks/useForm';
// import { UPDATE} 

export const UpdateProject = ()=>{
    const [formValues, handleInputChange, handleInputChangeSelect, inputChange] = useForm({
        name: '',
        id: '',
        startDate: new Date(2021,10,10),
        endDate: new Date(2022,10,10),
        leader: '',
        state: "",
        phase: ""
        
        // description
    });
    const {name, id, startDate, endDate} = formValues;

    const updateForm = (e)=>{
        e.preventDefault();
    }

    return(
        <div>
            <div className="section products">
            <div className="product__info">
                <h1 className="producto__info-title">Actualizar Proyecto</h1>
                <form onSubmit={updateForm}>
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
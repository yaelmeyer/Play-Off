import React, {  useState } from "react";
import '../styles/components/formularioJuego.css';


const FormularioJuego = (props) =>{
    const setFormulario = props.setFormulario
    const cantPjs = props.cantPjs
    const setCantPjs = props.setCantPjs
    const setCargarPjs = props.setCargarPjs

    const completarForm = () =>{
        if(cantPjs > 0){
            console.log('empezarJuego')
            setFormulario(false)
            setCargarPjs(true)
        }
        console.log('falta elejir la cant de pjs')
    }

    const elejirCantPjs = (event) =>{
        setCantPjs(parseInt(event.target.value))
    }

    return(
        <form onSubmit={completarForm} className="formulario">
            <ul>
                {/* <li>
                    <label htmlFor="cant-jugadores">Cantidad Jugadores</label>
                    <input type="number" id="cant-jugadores"/>
                </li> */}
                <li>
                    <label>Cantidad Personajes</label>
                    <div className="radio-personajes">
                        <input type="radio" id="2" name="cant-personajes" value="2" onChange={elejirCantPjs}/>
                        <label htmlFor="2">2</label>
                        <input type="radio" id="4" name="cant-personajes" value="4" onChange={elejirCantPjs}/>
                        <label htmlFor="4">4</label>
                        <input type="radio" id="4" name="cant-personajes" value="8" onChange={elejirCantPjs}/>
                        <label htmlFor="4">8</label>
                        <input type="radio" id="4" name="cant-personajes" value="16" onChange={elejirCantPjs}/>
                        <label htmlFor="4">16</label>
                        <input type="radio" id="4" name="cant-personajes" value="32" onChange={elejirCantPjs}/>
                        <label htmlFor="4">32</label>
                    </div>
                    
                </li>
                {/* <li>
                    <label htmlFor="nombre">Nombre Partida</label>
                    <input type="text" id="nombre"/>
                </li> */}
                <button type="submit">crear partida</button>
            </ul>
         </form>
    );
}

export default FormularioJuego;
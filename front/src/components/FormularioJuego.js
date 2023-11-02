import React from 'react';
import '../styles/components/formularioJuego.css';

const FormularioJuego = (props) =>{
    return(
        <form action="" className="formulario">
            <ul>
                 <li>
                    <label htmlFor="administrador">aqui va el nombre del administrador</label>
                </li> 
                <li>
                    <label htmlFor="cant-jugadores">Cantidad Jugadores</label>
                    <input type="number" id="cant-jugadores"/>
                </li>
                <li>
                    <label>Cantidad Personajes</label>
                    <div className="radio-personajes">
                        <input type="radio" id="2" name="cant-personajes" value="2"/>
                        <label htmlFor="2">2</label>
                        <input type="radio" id="4" name="cant-personajes" value="4"/>
                        <label htmlFor="4">4</label>
                        <input type="radio" id="4" name="cant-personajes" value="4"/>
                        <label htmlFor="4">8</label>
                        <input type="radio" id="4" name="cant-personajes" value="4"/>
                        <label htmlFor="4">16</label>
                        <input type="radio" id="4" name="cant-personajes" value="4"/>
                        <label htmlFor="4">32</label>
                    </div>
                    
                </li>
                <li>
                    <label htmlFor="nombre">Nombre Partida</label>
                    <input type="text" id="nombre"/>
                </li>
                <button type="submit">crear partida</button>
            </ul>
        </form>
    );
}

export default FormularioJuego;
import React from 'react';
import FormularioJuego from '../components/FormularioJuego';

const url = 'cargar-pjs'

const IniciarJuego = (props) => {
    return(
        <>
            <h2>Elija las opciones de juego:</h2>
            <FormularioJuego url = {url}/>
        </>
    );
}



export default IniciarJuego;
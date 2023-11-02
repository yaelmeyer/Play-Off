import React from 'react';
import Header from '../shared/Header';
import FormularioJuego from '../components/FormularioJuego';

const IniciarJuego = (props) => {
    return(
        <>
            <Header/>
            <Nav/>
            <h2>Elija las opciones de juego:</h2>
            <FormularioJuego/>
            <Footer/>
        </>
    );
}

export default IniciarJuego;
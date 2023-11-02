import React from 'react';
import Header from "../shared/Header";
import Nav from '../shared/Nav';
import Footer from '../shared/Footer';
import Carrucel from '../components/Carrucel';

const UltimosPjsAgregados = (props) =>{
    return(
        <>
            <Header/>
            <Nav/>
            <h2>Estos son lso ultimos 10 personajes agregados en los ultimos juegos</h2>
            <Carrucel/>
            <Footer/>
        </>
    );
}

export default UltimosPjsAgregados;
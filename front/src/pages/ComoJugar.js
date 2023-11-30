import React from 'react';
import pj1 from '../img/carrucel/pj1.png';
import pj2 from '../img/carrucel/pj2.png';
import CajaTexto from '../components/CajaTexto';

const parrafos1=[
    // 'Para comenzar a jugar primero se debe elejir la cantidad de participantes',
    'Hay que elejir la cantidad de personajes que se van a elejir',
    'Esta cantidad puede ser: 2, 4, 8, 16 o 32  personajes',
    // 'La cantidad de personajes se va a dividir entre la cantidad de participantes',
    'comienza a cargar a la app los pjs que quieran'      
];
const parrafos2=[
    'los personaejes cargados se elijiran de a par, y se debera elejir el que mas le guste'
];
const parrafos3=[
    'El pj votado avanza a la siguiente ronda',
    'Los pjs iran pasando de ronda hasta quedar solo 1!!!'
];

const ComoJugar = (props) =>{
    return(
        <div className="explicacion">
            <h2>Inicio</h2>
            <CajaTexto parrafos={parrafos1}/>
            <h2>comienzo</h2>
            <CajaTexto parrafos={parrafos2}/>
            <div className="imagenes">
                <img  src={pj1} alt="First slide"/>
                <div>
                    <span>VS</span>
                </div>
                <img  src={pj2} alt="First slide"/>
            </div>
            <CajaTexto parrafos={parrafos3}/>
        </div>
    );
}

export default ComoJugar;
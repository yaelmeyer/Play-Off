import React from 'react';

import pj1 from '../img/carrucel/pj1.png';
import pj2 from '../img/carrucel/pj2.png';

const ComoJugarTexto = (props) =>{
    return(
        <div>
            <h2>Inicio</h2>
            <p>Para comenzar a jugar primero se debe elejir la cantidad de participantes</p>
            <p>Luego hay que elejir la cantidad de personajes que se van a elejir</p>
            <p>Esta cantidad puede ser: 2, 4, 8, 16 o 32  personajes</p>
            <p>La cantidad de personajes se va a dividir entre la cantidad de participantes</p>
            <p>cada participante comienza a cargar a la app los pjs que quieran</p>
            <h2>comienzo</h2>
            <p>los personaejes cargados se elijiran de a par aleatoriamente, y cada particitante debe votar el que mas le guste</p>
            <div>
                <img  src={pj1} alt="First slide"/>
                <div>
                    <span>VS</span>
                </div>
                <img  src={pj2} alt="First slide"/>
            </div>
            <p>El pj mas votado avanza a la siguiente ronda</p>
            <p>Los pjs iran pasando de ronda hasta quedar solo 1!!!</p>
        </div>
    );
}

export default ComoJugarTexto;
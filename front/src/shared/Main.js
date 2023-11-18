import React from 'react';
import CajaTexto from '../components/CajaTexto';
import Carrucel from '../components/Carrucel';

const parrafos =[
    'Play-Off es un juego para jugar con amigos, que consiste en elijir personajes famosos y votar a tus favoritos.',
    'Puedes elejir a cualquiera que quieras, solo tienes que cargar la imagen en la app'
];

const Main = (props) =>{
    return(
        <>
            <CajaTexto parrafos={parrafos}/>
            <Carrucel/>
        </>
    );
}

export default Main;
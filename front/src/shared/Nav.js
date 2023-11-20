import React from 'react';
import '../styles/shared/nav.css';
import {NavLink} from 'react-router-dom';

const Nav = (props) =>{
    return(
        <nav>
            <ul>
                <li><NavLink to="/" className={({isActive}) => isActive? 'activo' : undefined}>Inicio</NavLink></li>
                <li><NavLink to="/como-jugar" className={({isActive}) => isActive? 'activo' : undefined}>Como Jugar</NavLink></li>
                <li><NavLink to="/iniciar-juego" className={({isActive}) => isActive? 'activo' : undefined}>Iniciar Juego</NavLink></li>
                <li><NavLink to='/unirse-partida' className={({isActive}) => isActive? 'activo' : undefined}>Entrar a partida</NavLink></li>
                <li><NavLink to="/ultimos-pjs" className={({isActive}) => isActive? 'activo' : undefined}>Ultimos Personajes</NavLink></li>
            </ul>
        </nav>
        
    );
}

export default Nav;
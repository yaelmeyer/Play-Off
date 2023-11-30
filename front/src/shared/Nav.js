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
                <li><NavLink to='/comunicarse' className={({isActive}) => isActive? 'activo' : undefined}>comunicarse</NavLink></li>
                <li><NavLink to="/novedades" className={({isActive}) => isActive? 'activo' : undefined}>novedades</NavLink></li>
            </ul>
        </nav>
        
    );
}

export default Nav;
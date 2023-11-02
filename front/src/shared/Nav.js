import React from 'react';
import {Link} from 'react-router-dom';

const Nav = (props) =>{
    return(
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/como-jugar">Como Jugar</Link></li>
                <li><Link to="/iniciar-juego">Iniciar Juego</Link></li>
                <li><Link to="/ultimos-pjs">Ultimos Personajes</Link></li>
            </ul>
        </nav>
        
    );
}

export default Nav;
import React from 'react';
import '../styles/shared/header.css';
import goku from '../img/header/goku.png';
import naruto from '../img/header/naruto.png';


const Header = (props) =>{
    return (
        <header>
            <div className="contenedor">
                <div>
                    <img src={goku} alt="goku"/>
                </div>
                <div className="titulo">
                    <h1>Play-Off</h1>
                </div>
                <div>
                    <img src={naruto} alt="naruto"/>
                </div>
            </div>
        </header>
    );
}

export default Header;
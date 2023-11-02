import React from 'react';
import goku from '../img/header/goku.png';
import naruto from '../img/header/naruto.png';

const Header = (props) =>{
    return (
        <div>
            <div>
                <img src={goku} alt="goku"/>
            </div>
            <div>
                <h1>Play-Off</h1>
            </div>
            <div>
                <img src={naruto} alt="naruto"/>
            </div>
            
        </div>
    );
}

export default Header;
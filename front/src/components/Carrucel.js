import React from 'react';
import pj1 from '../img/carrucel/pj1.png';
import pj2 from '../img/carrucel/pj2.png';
import pj3 from '../img/carrucel/pj3.png';
import pj4 from '../img/carrucel/pj4.png';
import pj5 from '../img/carrucel/pj5.png';
import pj6 from '../img/carrucel/pj6.png';
import pj7 from '../img/carrucel/pj7.png';

const Carrucel = (props) => {
    return(
        <div>
            <img  src={pj1} alt="First slide"/>
            <img  src={pj2} alt="First slide"/>
            <img  src={pj3} alt="First slide"/>
            <img  src={pj4} alt="First slide"/>
            <img  src={pj5} alt="First slide"/>
            <img  src={pj6} alt="First slide"/>
            <img  src={pj7} alt="First slide"/>
        </div>
    );
}

export default Carrucel;
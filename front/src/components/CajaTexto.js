import React from 'react';
import  '../styles/components/cajaTexto.css';

const CajaTexto = (props) =>{
    const parrafos = props.parrafos;
    return(
        <div className="explicacion">
            {parrafos.map(parrafo => <p key={parrafo}>{parrafo}</p>)}
        </div>
    );
}

export default CajaTexto;
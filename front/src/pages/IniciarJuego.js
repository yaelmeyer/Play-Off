import React, { useState } from 'react';
import FormularioJuego from '../components/FormularioJuego';
import EleccionPjs from './juego/EleccionPjs';

const url = 'cargar-pjs'


const IniciarJuego = (props) => {
    //estador de flujo
    const [formulario, setFormulario] = useState(true)
    const [cargarPjs, setCargarPjs] = useState(false)
    const [empezar, setEmpezar] = useState(false)

    //variables 
    const [cantPjs, setCantPjs] = useState(0)

    return(
        <>
            {formulario?(
                <div>
                    <h2>Elija las opciones de juego:</h2>
                    <FormularioJuego    setFormulario={setFormulario} 
                                        setCantPjs={setCantPjs}
                                        setCargarPjs={setCargarPjs}/>
                </div>                
            ): <div/>}

            {cargarPjs?(
                <div>
                    <EleccionPjs setEmpezar={setEmpezar}/>
                </div>
            ) : <div></div>}
            
        </>
    );
}



export default IniciarJuego;
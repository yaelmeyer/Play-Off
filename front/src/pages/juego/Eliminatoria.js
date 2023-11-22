import { useState } from 'react'
import Duelo from './Duelo'

const Eliminatoria = (props) =>{
    const url1 = 'img/carrucel/pj6.png'
    const url2 = 'img/carrucel/pj2.png'
    const pjs = [url1, url2] 
    const [siguiente, setSiguiente] = useState(0)

    return(
        <>
            <Duelo  pjs= {pjs}
                    setSiguiente={setSiguiente}
                    ganador={siguiente}>
            </Duelo>
            <span>{siguiente}</span>
        </>
    )
}

export default Eliminatoria


// {siguiente ? (
//     <span>true</span>
// ) :
// (<span>false</span>)}
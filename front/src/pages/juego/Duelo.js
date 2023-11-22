//  import pj1 from '../../img/carrucel/pj1.png'

import { useEffect, useState } from "react"

// import pj2 from '../../img/carrucel/pj2.png'
const ROOT = '/img/carrucel'

const Duelo = (props) =>{
    const pj1 = require(`../../${props.pjs[0]}`) 
    const pj2 = require(`../../${props.pjs[1]}`) 
    const vs = require('../../img/vs.png')
    const pjs = [pj1, vs, pj2]

    return(
        <div className="imagenes">
            {pjs.map((pj) =>(
                <img src={pj}/>
            ))}
        </div>
    )
}

export default Duelo
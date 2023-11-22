//  import pj1 from '../../img/carrucel/pj1.png'

import { useEffect, useState } from "react"

// import pj2 from '../../img/carrucel/pj2.png'
const ROOT = '/img/carrucel'

const Duelo = (props) =>{
    const pj1 = require(`../../${props.pj1}`) 
    const pj2 = require(`../../${props.pj2}`)

    return(
        <div className="imagenes">
            <img  src={ pj1 } />
            <div>
                <span>VS</span>
            </div>
            <img  src={pj2} alt="First slide"/>
        </div>
    )
}

export default Duelo
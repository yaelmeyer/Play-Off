//  import pj1 from '../../img/carrucel/pj1.png'

import { useEffect, useState } from "react"

// import pj2 from '../../img/carrucel/pj2.png'
const ROOT = '/img/carrucel'

const Duelo = (props) =>{
    let pj1 = require(`../../${props.pjs[0]}`) 
    let pj2 = require(`../../${props.pjs[1]}`) 
    let ganador = require(`../../${props.pjs[props.ganador]}`) 
    const vs = require('../../img/vs.png')
    const setSiguiente = props.setSiguiente


    const votar =(index) =>{
        setSiguiente(index)
    }

    return(
        <div className="imagenes">
            <img src={pj1} key={pj1} onClick={() =>votar(0)}/>
            <img src={vs} key={vs}/>
            <img src={pj2} key={pj2} onClick={() =>votar(1)}/>
            <br/>
            <img src={ganador} key={ganador}/>
        </div>
    )
}

export default Duelo

// {pjs.map((pj, index) =>(
//     <img src={pj} key={pj} onClick={() =>votar(index)}/>
// ))}
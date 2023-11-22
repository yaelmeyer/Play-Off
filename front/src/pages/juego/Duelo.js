//  import pj1 from '../../img/carrucel/pj1.png'

import { useEffect, useState } from "react"

// import pj2 from '../../img/carrucel/pj2.png'
const ROOT = '/img/carrucel'

const Duelo = (props) =>{
    const pos1Actual = props.pos1Actual
    const pos2Actual = props.pos2Actual
    const setPos1Actual = props.setPos1Actual
    const setPos2Actual = props.setPos2Actual

    let pj1 = require(`../../${props.pjs[0]}`) 
    let pj2 = require(`../../${props.pjs[1]}`) 
    const vs = require('../../img/vs.png')
    const setEliminatoria = props.setEliminatoria


    const votar =(index) =>{
        console.log(index)
        setPos1Actual(pos1Actual+2)
        setPos2Actual(pos2Actual+2)
    }

    return(
        <div className="imagenes">
            <img src={pj1} key={pj1} onClick={() =>votar(0)}/>
            <img src={vs} key={vs}/>
            <img src={pj2} key={pj2} onClick={() =>votar(1)}/>
            <br/>
        </div>
    )
}

export default Duelo

// {pjs.map((pj, index) =>(
//     <img src={pj} key={pj} onClick={() =>votar(index)}/>
// ))}
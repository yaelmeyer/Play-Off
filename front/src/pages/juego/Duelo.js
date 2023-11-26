//  import pj1 from '../../img/carrucel/pj1.png'

import { useEffect, useState } from "react"

// import pj2 from '../../img/carrucel/pj2.png'
const ROOT = '/img/carrucel'

const Duelo = (props) =>{
//props _____________________________________________________
    const pos1Actual = props.pos1Actual
    const pos2Actual = props.pos2Actual
    const setPos1Actual = props.setPos1Actual
    const setPos2Actual = props.setPos2Actual

    const setUrlsActual = props.setUrlsActual
    const setUrlsSiguiente = props.setUrlsSiguiente

    let fase = props.fase
    const setFase = props.setFase

    const setGanador = props.setGanador
//_____________________________________________________________

//variables___________________________________________________
    // let pj1 = require(`../../${props.pjs[0]}`) 
    // let pj2 = require(`../../${props.pjs[1]}`) 
    let pj1 = props.pjs[0]
    let pj2 = props.pjs[1]
    const vs = require('../../img/vs.png') 
//______________________________________________________________

//variables de logica___________________________________________
    const [cont, setCont] = useState(2);
    const [pjsGanadores, setPjsGanadores] = useState([])
//________________________________________________________________

    console.log('fase: '+ fase)

    const votar =(index) =>{
        // debugger
       if(pjsGanadores.length < fase/2){
        pjsGanadores.push(props.pjs[index])
        setPjsGanadores(pjsGanadores)
        setPos1Actual(pos1Actual+2)
        setPos2Actual(pos2Actual+2)
        setCont(cont + 2) 
       }
       if(pjsGanadores.length!=1 && pjsGanadores.length == fase/2){
        setUrlsActual(pjsGanadores)
        setCont(2)
        setFase(fase/2)
        setPos1Actual(0)
        setPos2Actual(1)
        setPjsGanadores([])
       } 

       if(pjsGanadores.length == 1 && fase == 2){
        // const winner = require(`../../${pjsGanadores[0]}`)
        const winner = pjsGanadores[0]
        setGanador(winner)
        console.log('ganador: '+winner)
       }
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
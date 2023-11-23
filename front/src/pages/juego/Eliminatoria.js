import { useState } from 'react'
import Duelo from './Duelo'

const Eliminatoria = (props) =>{
    const cantPjs = 4
    const url1 = 'img/carrucel/pj1.png'
    const url2 = 'img/carrucel/pj2.png'
    const url3 = 'img/carrucel/pj3.png'
    const url4 = 'img/carrucel/pj4.png'
    const url5 = 'img/carrucel/pj5.png'
    const url6 = 'img/carrucel/pj6.png'
    const url7 = 'img/carrucel/pj7.png'
    const url8 = 'img/carrucel/pj8.png'

    const [urlsActual, setUrlsActual] = useState([url1, url2, url3, url4, url5, url6, url7, url8])

    const [urlsSiguiente, setUrlsSiguiente] = useState([])

    const [pos1Actual, setPos1Actual] = useState(0)
    const [pos2Actual, setPos2Actual] = useState(1)

    let url1Actual = urlsActual[pos1Actual]
    let url2Actual = urlsActual[pos2Actual]
    let pjs = [url1Actual, url2Actual] 
    
    const [fase, setFase] = useState(urlsActual.length)

    const [ganador, setGanador] = useState(null)

    return(
        <>
            {!ganador?(
                <Duelo  pjs= {pjs}
                    pos1Actual={pos1Actual}
                    pos2Actual={pos2Actual}
                    setPos1Actual={setPos1Actual}
                    setPos2Actual={setPos2Actual}
                    fase = {fase}
                    setFase= {setFase}
                    setUrlsActual={setUrlsActual}
                    setUrlsSiguiente={setUrlsSiguiente}
                    setGanador={setGanador}>
            </Duelo>
            ) :
            <div className='imagenes'>
                <h2>Ganador:</h2>
                <img src={ganador} />
            </div>
            }
            
            
        </>
    )
}

export default Eliminatoria


// {siguiente ? (
//     <span>true</span>
// ) :
// (<span>false</span>)}


// {urlsActual.map((url) => (
//     <p key={url}>{url}</p>
// ))}
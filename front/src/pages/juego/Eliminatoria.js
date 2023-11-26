import { useState } from 'react'
import Duelo from './Duelo'
import { Navigate } from 'react-router-dom'

const Eliminatoria = (props) =>{
    //props
    const personajes = props.pjs

    const cantPjs = 4

    const [urlsActual, setUrlsActual] = useState(personajes)

    const [urlsSiguiente, setUrlsSiguiente] = useState([])

    const [pos1Actual, setPos1Actual] = useState(0)
    const [pos2Actual, setPos2Actual] = useState(1)

    let url1Actual = urlsActual[pos1Actual]
    let url2Actual = urlsActual[pos2Actual]
    let pjs = [url1Actual, url2Actual] 
    
    const [fase, setFase] = useState(urlsActual.length)

    const [ganador, setGanador] = useState(null)

    const [inicio, setInicio] = useState(false)
    
    const regresarInicio = () =>{
        console.log('regresarInicio')
        setInicio(true)
    }

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
                <button onClick={regresarInicio}>volver al inicio</button>
                {inicio && <Navigate to={'/'}/>}
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
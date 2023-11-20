import axios from 'axios'

const apiUrl = 'http://localhost:8280/api/partidas/get-partida'
let partida = null;

const UnirseAPartida = (props) =>{
    return(
        <form onSubmit={unirseAPartida} className="formulario">
            <ul>
                <li>
                    <label htmlFor="nombre">Ingrese id de la partida</label>
                    <input type="text" id="nombre"/>
                </li>
                <button type="submit"
                onClick={unirseAPartida}>unirse partida</button>
            </ul>
        </form> 
    )
}

const unirseAPartida = () => { 
    axios.get(apiUrl) 
     .then( (res) =>{
        partida = res
    })
}

export default UnirseAPartida
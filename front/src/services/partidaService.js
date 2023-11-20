import axios from 'axios'

const apiURL = "http://localhost:8280/api/partidas/get-partida"

const getPartida = () =>{
    return axios.get(this.apiURL)
}

export default getPartida
const express = require('express')
const cors = require('cors')

class Server{
    constructor(){
        this.app = express()
        this.port = 8280
        this.partidasPath = "/api/partidas"
        this.personajesPath = '/api/personajes'

        //conectar a la base de datos

        //middlewares
        this.middlewares()

        //rutas de la app
        this.routes()
    }

    middlewares(){
        //cors
        this.app.use(cors())
        //parseo y lectura del body
        this.app.use(express.json())
        //dierctorio publico
        this.app.use(express.static('public'))
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`escuchando en el puerto : ${this.port}`)
        })
    }

    routes(){
        this.app.use(this.partidasPath, require('../routes/partidaRoute')),
        this.app.use(this.personajesPath, require('../routes/personajesRoute'))
    }
}

module.exports = Server
const {request, response} = require('express')
let pool = require('../db/conectorDB')

const partidaPost = async(req = request, res = response) =>{

    res.json({
        msg: 'se crea la partida',
        
    })
}

const partidaGet = async(req = request, res = resonse) =>{

    partida = {
        id: 1,
        cantJugadores: 1,
        cantPersonajes: 4,
        nombre: "prueba",
        estado: "iniciada"
    }

    res.json({
        msg: 'partida obtenida',
        partida
    })
}

const pruebaGet = async(req = request, res = response) =>{
    console.log('pool ' + pool)

    const result = await pool.query("select * from persona")
    console.log(result)
    res.json({
        msg: 'se traen datos de la DB',
        result
    })
}

module.exports = {
    partidaPost,
    partidaGet,
    pruebaGet
}
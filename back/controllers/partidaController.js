const {request, response} = require('express')

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

module.exports = {
    partidaPost,
    partidaGet
}
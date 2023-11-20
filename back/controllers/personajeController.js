const {request, response} = require('express')

const personajeGet = async(req = request, res = response) =>{
    pj1 = {
        id: 1,
        nombre: 'pikachu',
        urlImg: 'pj4.png',
        idPartida: 1
    }

    pj2 = {
        id: 2,
        nombre: 'messi',
        urlImg: 'pj6.png',
        idPartida: 1
    }

    pj3 = {
        id: 3,
        nombre: 'luffy',
        urlImg: 'pj3.png',
        idPartida: 1
    }

    pj4 = {
        id: 4,
        nombre: 'daryl',
        urlImg: 'pj1.png',
        idPartida: 1
    }

    personajes = [pj1, pj2, pj3, pj4]

    res.json({
        msg: 'personajes encontrados',
        personajes
    })
}

module.exports = {
    personajeGet
}
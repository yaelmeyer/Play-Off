const {request, response} = require('express')
let pool = require('../db/conectorDB')

const novedadGet = async(req = request, res = response) =>{

    res.json({
        msg: 'se obtiene novedad'
    })
}

const novedadPost = async(req = request, res = response) =>{

    res.json({
        msg: 'se guarda novedad'
    })
}

const novedadDelete = async(req=request, res=response) =>{

    res.json({
        msg: 'se elimina novedad'
    })
}

const novedadUpdate = async(req = request, res = response) =>{

    res.json({
        msg: 'se actualiza novedad'
    })
}

module.exports = {
    novedadGet,
    novedadPost,
    novedadDelete,
    novedadUpdate
}
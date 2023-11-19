const {request, response} = require('express')

const partidaPost = async(req = request, res = response) =>{

    res.json({
        msg: 'se crea la partida',
        
    })
}

module.exports = {
    partidaPost
}
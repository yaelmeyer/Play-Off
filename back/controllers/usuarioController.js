const {request, response} = require('express')
const md5 = require('md5')
let pool = require('../db/conectorDB')

const usuarioPost = async(req = request, res = response) =>{
    const {usuario, password} = req.body
    console.log('user: '+usuario)
    console.log('pass: '+password)
    const query = "select * from usuario where nombre = ? and password = ?"
    console.log( md5(`${password}`))
    const result = await pool.query(query, [usuario, md5(`${password}`)])

    // res.json({
    //     msg: 'se traen datos de la DB',
    //     result
    // })
    
    if(result.length > 0){
        res.render('admin/index')
    }
    else
    res.render('admin/login')
}

const inicio = (req = request, res=response) =>{

    res.render('admin/login')
}

module.exports = {
    usuarioPost,
    inicio
}
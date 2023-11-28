const {request, response} = require('express')
let pool = require('../db/conectorDB')

const novedadGet = async(req = request, res = response) =>{

    const query = 'select * from novedad'

    const result = await pool.query(query)

    res.json({
        msg: 'se obtubieron las novedades',
        novedades: result
    })
}

const novedadGetById = async(id) =>{
    const query = 'select * from novedad where id = ?'

    const novedad = await pool.query(query, [id])

    return novedad[0]
}

const novedadPost = async(req = request, res = response) =>{
    const {titulo, descripcion} = req.body
    const query = `insert into novedad (titulo, descripcion) values (?, ?) `
    console.log("holaa: "+titulo+" "+descripcion)
    await pool.query(query, [titulo, descripcion])

    res.redirect('/novedades/admin')
}

const novedadDelete = async(req=request, res=response) =>{
    const id = req.params.id
    const query = 'delete from novedad where novedad.id = ?'
    
    await pool.query(query, [id])

    res.redirect('/novedades/admin')
}

const novedadUpdate = async(req = request, res = response) =>{
    const {id, titulo, descripcion} = req.body
    const query = 'update novedad set titulo = ?, descripcion = ? where id = ?'

    await pool.query(query, [titulo, descripcion, id])
    res.redirect('/novedades/admin')
}

const inicio = async(req = request, res=response) =>{
    const query = 'select * from novedad'
    const result = await pool.query(query)
    console.log(result)
    res.render('admin/novedades',{
        novedades: result,
        holi: 'sooo'
    })
}

const actualizar = async(req = request, res=response) =>{
    const id = req.params.id
    const novedad = await novedadGetById(id)

    res.render('admin/novedades/modificar',{
        novedad: novedad
    })
}

module.exports = {
    novedadGet,
    novedadPost,
    novedadDelete,
    novedadUpdate,
    inicio,
    actualizar
}
const {request, response} = require('express')
const { getNovedadByIdDB, getNovedadesDB, postNovedadDB, deleteNovedadDB, updateNovedadDB } = require('../models/novedadModel')

const novedadPost = async(req = request, res = response) =>{
    const {titulo, descripcion} = req.body
    await postNovedadDB(titulo, descripcion)

    res.redirect('/novedades/admin')
}

const novedadDelete = async(req=request, res=response) =>{
    const id = req.params.id

    await deleteNovedadDB(id)

    res.redirect('/novedades/admin')
}

const novedadUpdate = async(req = request, res = response) =>{
    const {id, titulo, descripcion} = req.body

    await updateNovedadDB(id, titulo, descripcion)
    
    res.redirect('/novedades/admin')
}

const inicio = async(req = request, res=response) =>{
    const novedades = await getNovedadesDB()
    console.log(novedades)
    res.render('admin/novedades',{
        novedades: novedades
    })
}

const actualizar = async(req = request, res=response) =>{
    const id = req.params.id
    const novedad = await getNovedadByIdDB(id)

    res.render('admin/novedades/modificar',{
        novedad: novedad
    })
}

module.exports = {
    novedadPost,
    novedadDelete,
    novedadUpdate,
    inicio,
    actualizar
}
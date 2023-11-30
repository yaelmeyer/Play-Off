const {request, response} = require('express')
const { getNovedadByIdDB, getNovedadesDB, postNovedadDB, deleteNovedadDB, updateNovedadDB } = require('../models/novedadModel')
const util = require('util')
const cloudinary = require('cloudinary').v2

cloudinary.config({ 
    cloud_name: 'dh1irolp4', 
    api_key: '457439412886878', 
    api_secret: 'Hg2KZLkMy_fFwNOFy5ZwaMyi0j4',
    secure: true
  });

const uploader = util.promisify(cloudinary.uploader.upload)


const novedadPost = async(req = request, res = response) =>{

    try{
        var img = ''
        console.log('imagen: '+req.files.imagen)
        if(req.files && Object.keys(req.files).length > 0){
            imagen = req.files.imagen
            img = (await uploader(imagen.tempFilePath)).public_id
        }
    }catch(err){
        console.log('ERROR: '+err)
    }
    const {titulo, descripcion} = req.body
    await postNovedadDB(titulo, descripcion, img)

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
    let novedades = await getNovedadesDB()
    
    novedades = novedades.map(novedad =>{
        console.log('novedad: '+novedad.img)
        if(novedad.img){
            const imagen = cloudinary.image(novedad.img,{
                width: 100,
                height: 100,
                crop: 'fit'
            })
            return{
                ...novedad,
                imagen
            }
        } else{
            return {
                ...novedad,
                imagen: ''
            }
        }
    })
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
const { response} = require('express')
const {getNovedadesDB} = require('../models/novedadModel')
const cloudinary = require('cloudinary').v2

cloudinary.config({ 
    cloud_name: 'dh1irolp4', 
    api_key: '457439412886878', 
    api_secret: 'Hg2KZLkMy_fFwNOFy5ZwaMyi0j4',
    secure: true
  });

const novedadesGetApi = async( req, res, next ) =>{
    let novedades = await getNovedadesDB()

    novedades = novedades.map(novedad =>{
        if(novedad.img){
            const imagen = cloudinary.url(novedad.img, {
                width: 180,
                height: 170,
                crop: 'fill'
            })
            return {
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

    res.json(
        novedades
    )
}

module.exports = {
    novedadesGetApi
}
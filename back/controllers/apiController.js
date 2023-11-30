const express = require('express')
const {getNovedadesDB} = require('../models/novedadModel')
const nodemailer = require('nodemailer')
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

const contactoApi = async(req, res) =>{
    const mail = {
        to:'yaelyaelmeyer@gmail.com',
        subject: 'Contacto web',
        html: `${req.body.nombre} se contacto a traves de la web y quiere mas info a este correto ${req.body.email} <br> ademas, hizo el siguiente comentario: ${req.body.mensaje} <br> su tel es: ${req.body.telefono}`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth:{
            user:process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    })

    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    })
}



module.exports = {
    novedadesGetApi,
    contactoApi
}
var express = require('express')
var router = express.Router();


const {novedadesGetApi, contactoApi} = require('../controllers/apiController')


router.get('/novedades', novedadesGetApi)

router.post('/contacto', contactoApi)

module.exports = router
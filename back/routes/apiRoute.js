var express = require('express')
var router = express.Router();


const {novedadesGetApi} = require('../controllers/apiController')


router.get('/novedades', novedadesGetApi)

module.exports = router
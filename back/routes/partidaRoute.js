const {Router} = require('express')
const {partidaPost, partidaGet} = require('../controllers/partidaController')
const {pruebaGet} = require('../controllers/partidaController')

const router = Router();

router.post('/crear-partida', partidaPost)

router.get('/get-partida', partidaGet)

router.get('/prueba', pruebaGet)

module.exports = router
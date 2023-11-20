const {Router} = require('express')
const {partidaPost, partidaGet} = require('../controllers/partidaController')

const router = Router();

router.post('/crear-partida', partidaPost)

router.get('/get-partida', partidaGet)

module.exports = router
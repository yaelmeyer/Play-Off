const {Router} = require('express')
const {partidaPost} = require('../controllers/partidaController')

const router = Router();

router.post('/crear-partida', partidaPost)

module.exports = router
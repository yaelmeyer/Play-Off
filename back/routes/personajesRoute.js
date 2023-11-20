const {Router} = require('express')
const {personajeGet} = require('../controllers/personajeController')

const router = Router();

router.get('/buscar-pjs', personajeGet)

module.exports = router
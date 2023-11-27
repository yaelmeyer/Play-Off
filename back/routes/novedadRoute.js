const {Router} = require('express')
const {novedadGet, novedadPost, novedadDelete, novedadUpdate} = require('../controllers/novedadController')

const router = Router()

router.get('/', novedadGet)

router.post('/guardar', novedadPost)

router.delete('/eliminar', novedadDelete)

router.put('/actualizar', novedadUpdate)

module.exports = router

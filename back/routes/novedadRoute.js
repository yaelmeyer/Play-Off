const {Router} = require('express')
const {novedadPost, novedadDelete, novedadUpdate, inicio, actualizar} = require('../controllers/novedadController')

const router = Router()

router.get('/admin', inicio)


router.post('/guardar', novedadPost)

router.get('/eliminar/:id', novedadDelete)

router.get('/form-actualizar/:id', actualizar)

router.post('/actualizar', novedadUpdate)

module.exports = router

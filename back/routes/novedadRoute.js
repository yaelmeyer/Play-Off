const {Router} = require('express')
const {novedadGet, novedadPost, novedadDelete, novedadUpdate, inicio, actualizar} = require('../controllers/novedadController')

const router = Router()

router.get('/admin', inicio)

router.get('/', novedadGet)

router.post('/guardar', novedadPost)

router.get('/eliminar/:id', novedadDelete)

router.get('/form-actualizar/:id', actualizar)

router.post('/actualizar', novedadUpdate)

module.exports = router

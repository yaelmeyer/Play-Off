const {Router} = require('express');
const{usuarioPost, inicio, logout} = require('../controllers/usuarioController')

const router = Router();

/* GET home page. */
router.post('/inicio', usuarioPost);

router.get('/', inicio)

router.get('/salir', logout)

module.exports = router;

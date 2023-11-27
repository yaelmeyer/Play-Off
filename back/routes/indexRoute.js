const {Router} = require('express');
const{usuarioPost, inicio} = require('../controllers/usuarioController')

const router = Router();

/* GET home page. */
router.post('/login', usuarioPost);

router.get('/', inicio)

module.exports = router;

const router = require('express').Router()

const controller = require('../controllers/venta.controller')

router.get('/', controller.getAll)
router.post('/', controller.saveVenta)
router.get('/search', controller.search)

module.exports = router
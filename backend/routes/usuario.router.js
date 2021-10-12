const router = require('express').Router()

const controller = require('../controllers/usuario.controller')
 
router.get('/', controller.getAllUsers)

module.exports = router
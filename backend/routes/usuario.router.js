const router = require('express').Router()

const controller = require('../controllers/usuario.controller')
 
router.get('/', controller.getAllUsers)
router.post('/', controller.saveUser)
router.get('/search', controller.searchUser)

module.exports = router
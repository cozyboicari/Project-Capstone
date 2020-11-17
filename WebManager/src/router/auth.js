const express = require('express')

const router = express.Router()

const loginController = require('../controllers/controller.login')
const logoutController = require('../controllers/controller.logout')
const redirectIfAuthenticatedMiddleware = require('../middleware/redirectIfAuthenticatedMiddleware')
const adminController = require('../controllers/controller.loginAdmin')

router.get('/logout', logoutController)
router.get('/login', redirectIfAuthenticatedMiddleware, loginController)
router.post('/login', redirectIfAuthenticatedMiddleware, adminController)

module.exports = router

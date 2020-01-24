const express = require('express')
const userCtrl = require('../controllers/user')
const api = express.Router()
const mdlw = require('../middleware')
const session = require('../services/session')

api.post('/signup', mdlw.checkNickname, userCtrl.signup)
api.post('/login', userCtrl.login)
api.post('/checkLogin', session.checkLogin)

module.exports = api

const express = require('express')
const userCtrl = require('../controllers/user')
const msgCtrl = require('../controllers/message')
const api = express.Router()
const mdlw = require('../middleware')
const session = require('../services/session')

//users
api.post('/signup', mdlw.checkNickname, userCtrl.signup)
api.post('/login', userCtrl.login)
api.post('/checkLogin', session.checkLogin)

//messages
api.post('/sendMessage', mdlw.checkLogin, msgCtrl.send);

module.exports = api

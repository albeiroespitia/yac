const express = require('express')
const userCtrl = require('../controllers/user')
const api = express.Router()
const mdlw = require('../middleware')


api.post('/signup', mdlw.checkNickname, userCtrl.signup)
api.post('/login', userCtrl.login)

module.exports = api

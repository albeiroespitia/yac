const express = require('express')
const userCtrl = require('../controllers/user')
const api = express.Router()

api.post('/signup', userCtrl.signup)
api.post('/login', userCtrl.login)

module.exports = api

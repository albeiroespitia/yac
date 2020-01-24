const express = require('express')
const userCtrl = require('../controllers/user')
const api = express.Router()

api.post('/signup', userCtrl.signup)

module.exports = api

const express = require('express')
const logger  = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const user = require('./api/user/index.js')

app.use(logger('dev'))
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true })) 

app.use('/users' , user)

module.exports = app
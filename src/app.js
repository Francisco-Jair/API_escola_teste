const express = require('express')
const bodyParser = require('body-parser');
const app = express()


const users_rotas = require('./routers/users_routers')

app.use(bodyParser.urlencoded({ extend: false }))//Apenas dados simples
app.use(bodyParser.json()); //Aceitar apenas formato JSON

//Rotas
app.use('/users', users_rotas)


module.exports = app
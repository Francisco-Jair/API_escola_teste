const express = require('express')
const bodyParser = require('body-parser');
const app = express()


const users_rotas = require('./routers/users_routers')
const turmas_rotas = require('./routers/turmas_routers')

app.use(bodyParser.urlencoded({ extend: false }))//Apenas dados simples
app.use(bodyParser.json()); //Aceitar apenas formato JSON

//Rotas
app.use('/users', users_rotas)
app.use('/turmas', turmas_rotas)


module.exports = app
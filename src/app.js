const express = require('express')
const bodyParser = require('body-parser');
const app = express()

const users_rotas = require('./routers/users_routers')
const turmas_rotas = require('./routers/turmas_routers')
const aulas_rotas = require('./routers/aulas_routers')
const disciplina_rotas = require('./routers/disciplinas_routers')

app.use(bodyParser.urlencoded({ extend: false }))//Apenas dados simples
app.use(bodyParser.json()); //Aceitar apenas formato JSON

//Rotas
app.use('/users', users_rotas)
app.use('/turmas', turmas_rotas)
app.use('/aulas', aulas_rotas)
app.use('/disciplinas', disciplina_rotas)

module.exports = app
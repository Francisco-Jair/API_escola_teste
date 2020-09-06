const knex = require('../database')

module.exports = {
    async create(req, res, next) {
        try {
            const { nome } = req.body
            await knex('turma').insert({ nome })
            res.status(201).send({
                msm: "Turma Cadastrado"
            })
        } catch (error) {
            next(error)
        }
    },
    async list_turmas(req, res, next) {
        try {
            const result = await knex('turma')

            res.json(result)
        } catch (error) {
            next(error)
        }
    },
};
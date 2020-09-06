const knex = require('../database')

module.exports = {
    async create(req, res, next) {
        try {
            const { nome, email, tipo } = req.body
            await knex('users').insert({ nome, email, tipo })
            res.status(201).send({
                msm: "usuario Cadastrado"
            })
        } catch (error) {
            next(error)
        }
    },
    async list_users(req, res, next) {
        try {
            const result = await knex('users')

            res.json(result)
        } catch (error) {
            next(error)
        }
    },
};
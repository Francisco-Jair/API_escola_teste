const knex = require('../database')

module.exports = {
    async create(req, res, next) {
        try {
            const { codigo, turma_id } = req.body
            await knex('disciplina').insert({  codigo, turma_id })
            res.status(201).send({
                msm: "Disciplina Cadastrado"
            })
        } catch (error) {
            next(error)
        }
    },
    async list_disciplinas(req, res, next) {
        try {
            const result = await knex('disciplina')

            res.json(result)
        } catch (error) {
            next(error)
        }
    },
};
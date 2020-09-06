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
    async insert_alunos(req, res, next) {
        try {
            const { users_id, turma_id } = req.body
            await knex('turma_users').insert({ users_id, turma_id })
            res.status(201).send({
                msm: "Aluno Cadastrado"
            })
        } catch (error) {
            next(error)
        }
    },
    async list_alunos_turmas(req, res, next) {
        try {
            const id = req.params.id
            const result = await knex('turma_users').where({ turma_id: id })

            res.json(result)
        } catch (error) {
            next(error)
        }
    },
};
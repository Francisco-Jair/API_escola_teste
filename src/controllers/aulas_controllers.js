const knex = require('../database')

module.exports = {
    async create(req, res, next) {
        try {
            const { titulo, conteudo, disciplina_id } = req.body
            await knex('aula').insert({ titulo, conteudo, disciplina_id })
            res.status(201).send({
                msm: "Aula Cadastrado"
            })
        } catch (error) {
            next(error)
        }
    },
    async list_aulas(req, res, next) {
        try {
            const result = await knex('aula')

            res.json(result)
        } catch (error) {
            next(error)
        }
    },
};
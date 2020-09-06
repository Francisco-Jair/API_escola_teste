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
    async users_update(req, res, next) {
        try {
            const id = req.params.id
            const { nome, email } = req.body

            const result = await knex('users').where({ id })

            if (result.length === 0) {
                return res.status(201).send('Usuario inexistente')
            } else {
                await knex('users').update({ nome, email }).where({ id })

                return res.status(201).send('Usuario atualizado com sucessos')
            }

        } catch (error) {
            next(error)
        }
    },
    async users_delete(req, res, next) {
        try {
            const id = req.params.id

            const result = await knex('users').where({ id })

            if (result.length === 0) {
                return res.status(201).send('Usuario inexistente')
            } else {
                await knex('users')
                    .where({ id })
                    .del()

                return res.status(201).send('Usuario Excluido com sucessos')
            }

        } catch (error) {
            next(error)
        }
    },
};
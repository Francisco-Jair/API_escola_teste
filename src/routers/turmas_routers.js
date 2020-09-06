const express = require('express')
const router = express.Router();
const controllers_turmas = require('../controllers/turmas_controllers')

router.get('/', controllers_turmas.list_turmas)
router.post('/', controllers_turmas.create)

router.put('/', (req, res, next) => {
    res.status(201).send({
        msm: "USADO O put"
    })
})

router.delete('/', (req, res, next) => {
    res.status(201).send({
        msm: "USADO O delete"
    })
})


module.exports = router
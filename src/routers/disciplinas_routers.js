const express = require('express')
const router = express.Router();
const controllers_disciplinas = require('../controllers/disciplinas_controllers')

router.get('/', controllers_disciplinas.list_disciplinas)
router.post('/', controllers_disciplinas.create)

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
const express = require('express')
const router = express.Router();
const controllers_aulas = require('../controllers/aulas_controllers')

router.get('/', controllers_aulas.list_aulas)
router.post('/', controllers_aulas.create)

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
const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => {
    return res.status(200).send({
        msm: "USADO O GET"
    })
})

router.post('/', (req, res, next) => {
    res.status(201).send({
        msm: "USADO O post"
    })
})

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
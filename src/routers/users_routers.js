const express = require('express')
const router = express.Router();
const controllers_users = require('../controllers/users_controllers')

router.get('/', controllers_users.list_users)
router.post('/', controllers_users.create)
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
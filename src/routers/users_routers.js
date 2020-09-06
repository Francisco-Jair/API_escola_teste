const express = require('express')
const router = express.Router();
const controllers_users = require('../controllers/users_controllers')

router.get('/', controllers_users.list_users)
router.post('/', controllers_users.create)
router.put('/:id', controllers_users.users_update)
router.delete('/:id', controllers_users.users_delete)

module.exports = router
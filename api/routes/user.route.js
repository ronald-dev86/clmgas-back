'use strict'

const { router } = require('../config/plugins')
const { getUsers, saveUser } = require('./../controllers/users.ctrls')

router.get('/users', getUsers)
router.post('/users', saveUser)


module.exports = router
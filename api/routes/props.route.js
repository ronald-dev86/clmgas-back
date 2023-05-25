const { router } = require('../config/plugins')
const database = require('./../config/database')

router.use('/v1', [

  router.get('/props', (req, res) => {
    res.send('!Hola, mundo!')
  }),

  router.get('/props2', (req, res) => {
    console.log(database.getSocketConnection())
    res.send('!Hola, mundo! 2')
  })
])


module.exports = router

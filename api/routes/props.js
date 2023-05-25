const { router } = require('./../config/plugins')

router.get('/props', (req, res) => {
  res.send('!Hola, mundo!')
})

router.get('/props2', (req, res) => {
  res.send('!Hola, mundo! 2')
})

module.exports = router

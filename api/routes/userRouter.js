const { router } = require('./../config/plugins')

router.get('user1', (req, res) => {
  res.send('!Hola, mundo!')
})

router.get('user2', (req, res) => {
  res.send('!Hola, mundo! 2')
})
module.exports = router
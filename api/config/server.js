const { express } = require('./plugins')
const env = require('./environment.js')
const routes = require('./../routes/index')

const database = require('./database')


const app = express()

app.use('/api', routes);





app.listen(env.PORT, async () => {
  console.log('El servidor está escuchando en el puerto 3000')
  await database.main()
})

module.exports = app
const { express, bodyParser } = require('./plugins')

const env = require('./parameters')

/**
 * llamamos la base de datos
 */

require('./database')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', require('./../routes/index'));

app.listen(env.PORT, () => {
  console.log('El servidor está escuchando en el puerto 3000')
})

module.exports = app
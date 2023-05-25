const { express } = require('./plugins')
const env = require('./environment.js')
const routes = require('./../routes/index')


const app = express()

app.use('/api', routes);



app.listen(env['dev'].PORT, () => {
  console.log('El servidor está escuchando en el puerto 3000')
})

module.exports = app
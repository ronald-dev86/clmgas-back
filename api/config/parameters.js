const { notenv } = require('./plugins')

const parameters = {
  prod: {
    PORT: process.env.PORT_PROD
  },
  test: {
    PORT: process.env.PORT_TEST
  },
  dev: {
    PORT: process.env.PORT_DEV,
    DATABASE_URL: process.env.DATABASE_URL,
    DATABASE_NAME: process.env.DATABASE_NAME
  }
}

module.exports = parameters['dev']
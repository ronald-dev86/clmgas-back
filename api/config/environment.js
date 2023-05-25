const notenv = require('dotenv').config()

module.exports = {
  prod: {
    PORT: process.env.PORT
  },
  test: {

  },
  dev: {
    PORT: process.env.PORT
  }
}
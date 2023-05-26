const { MongoClient } = require('./plugins')
const env = require('./parameters');
const { Db } = require('mongodb');

const url = `${env.DATABASE_URL}`;

const client = new MongoClient(url)

let socketConnection
try {
  client.connect()
  console.log('Base de datos corriendo')
  socketConnection = client.db(env.DATABASE_NAME)
} catch (error) {
  console.log('tenemos problemas con la base de datos')
}

module.exports = socketConnection

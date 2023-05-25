const { MongoClient } = require('./plugins')
const env = require('./environment.js')

const url = `${env.DATABASE_URL}`;

const client = new MongoClient(url)

let socketConnection


async function main() {
  try {
    await client.connect()
    console.log('Base de datos corriendo')
    const db = client.db(env.DATABASE_NAME)
    setSocketConnection(db)
  } catch (error) {
    console.log('tenemos problemas con la base de datos')
  }
}

async function setSocketConnection(db) {
  socketConnection = db
}

async function getSocketConnection() {
  return socketConnection;
}








module.exports = { main, getSocketConnection };

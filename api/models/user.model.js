const { uuidv4 } = require('./../config/plugins')
const database = require('./../config/database')

collection = database.collection('users')

const modelUser = {

  async store(document) {
    document._id = uuidv4();
    return await collection.insertOne(document)
  },

  async edit() {

  },

  async findAll() {
    return await collection.find().toArray()
  },

  async findByID() {

  },

  async remove() {

  },
}



module.exports = modelUser;

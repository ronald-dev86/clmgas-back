const modelUser = require('./../models/user.model')

const getUsers = async (req, res = response) => {
  try {

    const result = await modelUser.findAll()
    res.status(200).json({
      ok: false,
      message: '',
      data: result
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: ''
    })
  }
}

const saveUser = async (req, res = response) => {
  try {
    const result = await modelUser.store(req.body)
    res.status(200).json({
      ok: true,
      message: '',
      data: result
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: ''
    })
  }
}


module.exports = { getUsers, saveUser }
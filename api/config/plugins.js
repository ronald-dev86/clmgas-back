const express = require('express')
const router = express.Router()

const notenv = require('dotenv').config()

const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

const MongoClient = require('mongodb').MongoClient;

const { v4: uuidv4 } = require('uuid');

const bodyParser = require('body-parser');

module.exports = {
  express,
  router,
  notenv,
  jwt,
  expressJwt,
  MongoClient,
  uuidv4,
  bodyParser

}
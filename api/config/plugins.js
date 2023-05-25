const express = require('express')
const router = express.Router()

const notenv = require('dotenv').config()

const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

const MongoClient = require('mongodb').MongoClient;

module.exports = {
  express,
  router,
  notenv,
  jwt,
  expressJwt,
  MongoClient
}
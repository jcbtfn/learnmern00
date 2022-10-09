const express = require('express')
const app = express()

// DB connection
const mongoose = require('mongoose')
mongoose
  .connect('mongodb://localhost/openopusdb')
  .then(() => console.log('connected to the db'))

// Model
const Composer = require('./models/composer.model')

app.get('/hello', (req, res) => res.json({
  message: 'ola ke ase?',
  date: new Date(),
  campus: 'Tenerife'
}))

app.listen(5005, () => console.log('Server up!'))

//after server and route set up, we need to set up the models
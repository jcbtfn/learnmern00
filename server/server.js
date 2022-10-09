const express = require('express')
const app = express()

// DB connection
const mongoose = require('mongoose')
mongoose
  .connect('mongodb://localhost/openopusdb')
  .then(() => console.log('connected to the db'))

// Model
const Composer = require('./models/composer.model')

//Routing
app.get ('/api/composers', (req, res) => { //all the composers/list of composers
  Composer
    .find()
    .then(allComposers => res.json(allComposers))
})

app.get ('/api/composers/:composerid', (req, res) => { //get the composer by id
  const {composerid} = req.params
  Composer
    .findById(composerid)
    .then(composer => res.json(composer))
})

app.get('/test', (req, res) => res.json({
  message: 'Hola Jacob X)',
  date: new Date(),
  campus: 'Tenerife'
}))

app.listen(5005, () => console.log('Server up!')) //server for the api

//after server and route set up, we need to set up the models
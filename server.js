const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3003

const pokemon = require('./models/pokemon.js')

app.get('/', function (req, res) {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', function (req, res) {
    res.send(pokemon)
})

app.listen(3000, function() {
    console.log('Listening on port', port)
 })
 
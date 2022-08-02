const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3003

app.set('view engine', 'jsx');
  app.engine('jsx', require('express-react-views').createEngine())
  
const pokemon = require('./models/pokemon.js')


app.get('/', function (req, res) {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', function (req, res) {
    res.render('Index', {pokemon:pokemon})
})

app.get('/pokemon/:id', function(req, res) {
    res.send(req.params.id)
})

app.listen(3000, function() {
    console.log('Listening on port', port)
 })
 
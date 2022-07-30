const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3003

app.get('/', function (req, res) {
    res.send('Welcome to the Pokemon App!')
})

app.listen(3000, function() {
    console.log('Listening on port', port)
 })
 
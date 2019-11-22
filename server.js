var bodyParser = require('body-parser')

const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)
  
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))
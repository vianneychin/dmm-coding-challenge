require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const path = require('path')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

require('./db')(app)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log(`Server is listening on Port: ${PORT}.`)
})

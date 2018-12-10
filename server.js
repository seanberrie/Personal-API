require('dotenv').config()

const express = require('express')
const app = express()
const logger = require('morgan')
const PORT = process.env.PORT || 3000
const meModel = require('./models/me')
const infoModel = require('./models/info')
const projects = require('./router/projects')
require('./DB')

app.use(logger('dev'))
app.use(express.json())
app.use('/api/projects', projects)
app.use('/api/profile', (req, res) => {
  res.json(meModel)
})
app.use('/api/', (req, res) => {
  res.json(infoModel)
})

app.listen(PORT, err => {
  console.log(err || `Holding my beer at ${PORT}`)
})

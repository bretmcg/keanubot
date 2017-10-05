// Load environment variables from `.env` file and/or OS.
require('dotenv').config();

const express = require('express'),
  bodyParser = require('body-parser'),
  botEndpoint = require('./bot-endpoint'),
  fulfillment = require('./fulfillment'),
  app = express()

// json body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// endpoint for slack event requests
app.post('/keanubot', botEndpoint.handler)

// endpoint for API.AI fulfillment
app.post('/apiaifulfillment', fulfillment.handler)

// start server
app.listen(process.env.LOCAL_PORT, () => {
  console.log(`Server started on port ${process.env.LOCAL_PORT}`)
})

const app = require('express')()
const cors = require('cors')
const bodyParser = require('express').json
const routes = require('./routes')

// Cors
app.use(cors())
// For accepting post form data
app.use(bodyParser())
// Routes
app.use(routes)

module.exports = app
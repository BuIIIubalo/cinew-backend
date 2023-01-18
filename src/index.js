const server = require('./server')

// Server port
const port = process.env.PORT || 8080

const startServer = () => {
  server.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })
}

startServer()
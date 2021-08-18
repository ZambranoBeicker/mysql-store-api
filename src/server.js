const app = require('./app')
const http = require('http')

//Initialize server
const server = http.createServer(app)

server.listen(process.env.PORT || 3000)

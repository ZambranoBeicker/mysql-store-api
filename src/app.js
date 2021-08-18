const express = require('express')
const cors = require('cors')
const app = express()

//Here will be placed all my routes

const productRouter = require('./routes/product')
const categoryRouter = require('./routes/category')

//Parse data and manage cors
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

//Middlewares of my routes
app.use('/product', productRouter)
app.use('/category', categoryRouter)

module.exports = app

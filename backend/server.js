const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.port || 5000
const {errorHandler} = require('./middleware/errorMiddleware')

connectDB()

const app = express()

app.use(express.json()) //built-in middleware in Express based in body parser to parse incoming requests with JSON payloads
app.use(express.urlencoded({extended:false})) //extended false means no nested object


app.use('/api/goals', require('./routes/goalRoutes'))
app.use(errorHandler) //Override Express built in error handling
app.listen(port, () => console.log(`Server started on port ${port}`))
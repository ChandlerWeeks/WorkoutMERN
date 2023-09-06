require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

// create an express app
const app = express()

// establish middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts', workoutRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests from port 4000
        app.listen(process.env.PORT, () => {
        console.log('connected to db & listening or port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })


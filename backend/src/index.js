const express = require('express')
const app = express()

const mongoose = require('mongoose')

const cors = require('cors')

const routes = require('./routes.js')

mongoose.connect('mongodb+srv://admin:admin@cluster0-zqvll.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

app.use(cors())
app.use(express.json())
app.use(routes)


app.listen(3333)
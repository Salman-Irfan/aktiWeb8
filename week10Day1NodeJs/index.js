const express = require('express')
const cors = require('cors')
const connectToMongoDb = require('./config/connectToMongoDb')
const createBookController = require('./controllers/createBookController')
const readAllBooksController = require('./controllers/readAllBooksController)')

const app = express()
app.use(cors())
app.use(express.json())


const port = 3000

// write any logic to connect node server woith mongo db, before request handlers
connectToMongoDb()


// req routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// end point, => fe dev ko, req handler
app.post (`/create-book`, createBookController)

app.get(`/read-all-books`, readAllBooksController)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
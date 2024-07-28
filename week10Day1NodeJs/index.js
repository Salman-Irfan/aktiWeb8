const express = require('express')
const cors = require('cors')
const router = require('./routes')
const connectToMongoDb = require('./config/connectToMongoDb')
const createBookController = require('./controllers/booksControllers/createBookController')
const readAllBooksController = require('./controllers/booksControllers/readAllBooksController)')
const readBookByIdController = require('./controllers/booksControllers/readBookByIdController')
const deleteBookByIdController = require('./controllers/booksControllers/deleteBookByIdController')
const updateBookByIdController = require('./controllers/booksControllers/updateBookByIdController')

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

app.use(`/`, router)

// // end point, => fe dev ko, req handler
// app.post (`/create-book`, createBookController)

// app.get(`/read-all-books`, readAllBooksController)

// // dynamic routing
// app.get(`/read-book-by-id/:id`, readBookByIdController)
// // delete book by id
// app.delete(`/delete-book-by-id/:id`, deleteBookByIdController)
// // patch update
// app.put(`/update-book-by-id/:id`, updateBookByIdController)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
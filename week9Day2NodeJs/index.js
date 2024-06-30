const express = require('express')
const cors = require('cors')
const demoGetController = require('./controllers/demoControllers/demoGetController')
const demoPostController = require('./controllers/demoControllers/demoPostController')
const app = express()
app.use(cors())
app.use(express.json())
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get(`/demo-get`, demoGetController)

app.post(`/demo-post`, demoPostController)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
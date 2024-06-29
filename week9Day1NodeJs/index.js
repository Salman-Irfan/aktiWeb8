const express = require('express')
const cors = require('cors')
const getHomeController = require('./controllers/getHomeController')
const getAboutController = require('./controllers/getAboutController')
const getContactCntroller = require('./controllers/getCOntactCOntroller')
const app = express()
app.use(cors())
const port = 4000

app.get('/', getHomeController)


app.get(`/about`, getAboutController)

app.get(`/contact`, getContactCntroller)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


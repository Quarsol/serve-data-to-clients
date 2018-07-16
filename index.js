const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const cohort = require('./routes/cohort.js')

app.use(cors())

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

app.use('/cohort', cohort)

app.listen(port, () => console.log('Example app listening on port ' + port))

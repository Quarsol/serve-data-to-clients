const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

app.use(cors())

app.use(bodyParser.urlencoded({
    extended: false
}))


app.use(bodyParser.json())

app.listen(port, () => console.log('Example app listening on port ' + port))

const express = require('express')
const bodyparser = require('body-parser')
const api = require('./routes/api')
const PORT = 3000
const app = new express
app.use(bodyparser.json())
app.use('/api', api)
app.get('/', function (req, res) {
    res.send('Hello')
})
app.listen(PORT, function () {
    console.log('Server is running ' + PORT)
})
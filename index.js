'use strict'

const express = require('express')
const app = express()

require('dotenv').config()

const port = process.env.port || 4000

app.listen(port, () => {
    console.log(`Starting Express server at ${port}`)
})

app.get('/', (req, res) => {
    res.status(200).send('OK')
})


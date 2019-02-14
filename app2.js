const express = require('express')
const axios = require('axios')

const app = express()
const port = 3001

app.get('/world', (req, res) => {
    res.send("Hello Network!")
    
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 
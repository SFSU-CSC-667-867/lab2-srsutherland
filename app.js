const express = require('express')
const axios = require('axios')

const app = express()
const port = 3000

app.get('/', (req, res) => res.send('My name is Sean Sutherland'))
app.get('/hello', (req, res) => {
    console.log(req.query)
    let content = ''
    if (res.query.name) {
        content = 'Hello ' + req.query.name
    } else {
        content = 'Hello World!'
    }
    res.send(content)
    
})
app.get('/network', (req, res) => {
    axios.get('http://localhost:3001/world')
    .then((networkresponse) => {
        res.send(networkresponse.data)
    })
    .catch(() => {
        res.send(':( did not work')
    })
    
})
app.get('/add', (req, res) => res.send(200))


app.listen(port, '0.0.0.0', () => console.log(`Example app listening on port ${port}!`)) 
//hostname 0.0.0.0 needed for ChromeOS
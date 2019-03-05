const express = require("express")
const app = express()
const PORT = 8080
const path = require("path")
/* set up bodyParser for communicating with axios */
const bodyParser = require('body-parser')

app.use(express.static('public'))
app.use(bodyParser.json())

/* pseudo DB */
let platter = {
    "user1": {
        timeIn: 7,
        sleep: 7,
        downTime: 7,
        play: 7,
        physical: 7,
        connecting: 7,
        focus: 7
    }
}

/* connect with the index.html file */
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+ '/index.html'))
})

/* send data to client side */
app.get('/data', function (req, res) {
    let data = platter
    res.json(data)
})

/* add data to the pseudo DB now */
app.post('/', function(req, res) {
    platter['user2'] = req.body
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`)
})


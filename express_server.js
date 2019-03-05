const express = require("express")
const app = express()
const PORT = 8080
const path = require("path")
const bodyParser = require('body-parser')


app.use(express.static('public'));
app.use(bodyParser.json())

let users = {
    "user1": {
        id: "user1",
        stress: 7,
        hunger: 7,
        energy: 7
    }
}

let vitalValue = {
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

app.post('/', function(req, res) {
    console.log(req.body);
})


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`)

})


require('dotenv').config();

const express = require("express")
const app = express()
const PORT = 8080
const path = require("path")
/* set up bodyParser for communicating with axios */
const bodyParser = require('body-parser')
/* import URI from .env */
const uri = process.env.URI
const MongoClient = require('mongodb').MongoClient
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(bodyParser.json())

MongoClient.connect(uri, (err, client) => {
    console.log('connected!')
    if (err) return console.log(err)
    db = client.db('DB')

    /* connect with the index.html file */
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname+ '/index.html'))
    })

    /* send data to client side */
    app.get('/data', function (req, res) {
        let data = user_info
        res.json(data)
    })

    /* add data to the pseudo DB now */
    app.post('/', function(req, res) {
        platter['user2'] = req.body
    })

    /* save user data in MongoDB */
    app.post('/data', (req, res) => {
        db.collection('data').save(req.body, (err, result) => {
            if (err) return console.log(err)
            console.log('saved to database!')
            res.redirect('/')
        })
    })
    
    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}!`)
    })
})



/* pseudo DB */
let user_info = {
    "user1": {
        days_play : 0,
        metrics: {
            stress: 0,
            energy: 0,
            platter: {
                timeIn: 0,
                downTime: 0,
                focusTime: 0,
                playTime: 0,
                connectingTime: 0,
                sleepTime: 0,
                physicalTime: 0
            }
        }
    }
}



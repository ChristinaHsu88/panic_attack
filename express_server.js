require('dotenv').config();

const express = require("express")
/* design stress bar doesn't require the use of MongoDB */
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
        const data = db.collection('data').find().toArray((err, gameData) => {
            if (err) {
                res.status(500).json({ error: err.message })
            } else {
                res.json(gameData)
            }
        })
    })

    app.post('/data', (req, res) => {
        console.log(req.body)
        db.collection('data').replaceOne(
            { 'gameData.name': req.body.gameData.name },
            { 'gameData': req.body.gameData },
            { upsert: true },
            (err, doc) => {
                if (err) {
                    console.log('update/add failed')
                } else {
                    console.log('update/add worked')
                }
            }
        )
    })

    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}!`)
    })
})

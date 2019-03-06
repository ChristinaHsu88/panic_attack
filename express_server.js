const express = require("express")
const app = express()
const PORT = 8080
const path = require("path")
/* set up bodyParser for communicating with axios */
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
/* below uri will need to be saved in git ignore file */
const uri = "mongodb+srv://ChristinaHsu88:Hsu4565150@db-ij8ke.mongodb.net/test?retryWrites=true";
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
        let data = platter
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



const express = require("express");
const app = express();
const PORT = 8080;
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
// const bcrypt = require("bcrypt");


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieSession({
    name: 'session',
    keys: ['demo'],
    maxAge: 24 * 60 * 60 * 1000
}))



let users = {
    "user1": {
        id: "user1",
        stress: 7,
        hunger: 7,
        energy: 7
    }
};

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
};

//cookie later
// app.use((req, res, next) => {
//     req.session.user_id = generateRandomString();
//     const x = users[req.session.user_id];
//     console.log(req.session.user_id)
//     // res.locals = { user };
//     // req.user = user;
//     next();

//     // console.log(user);
// })



app.get("/", (req, res) => {
    let morning = {choice1: 'get up', choice2: 'stay in bed'}
    res.render("intro", morning);
});

//changing the life stats according to the choice
app.post("/", (req, res) => {
   
    if (req.body.choice === "getUp") {
        users["user1"].energy += 1;
       
    } else if (req.body.choice2 === "stayInBed") {
        users["user1"].energy -= 1;
        users["user1"].stress += 1;
    }
    res.redirect('first');
})

app.get("/first", (req, res) => {
    let morning2 = {choice1: 'call friend', choice2: 'do the laundry on the floor'}
    res.render("first", morning2);
})

app.post("/first", (req, res) => {
    if (req.body.choice === "call friend") {
        users["user1"].stress -= 1;
        vitalValue["user1"].connecting += 0.5
    } else if (req.body.choice2 === "do the laundry on the floor") {
        vitalValue["user1"].focus += 1;
    }
    // console.log(users, vitalValue);
    res.redirect('result');
})

app.get("/result", (req, res) => {
    let data = {energy: users['user1'].energy, hunger: users['user1'].hunger};
    let vital = {timeIn: vitalValue['user1'].timeIn, play: vitalValue['user1'].play, sleep: vitalValue['user1'].sleep, downTime: vitalValue['user1'].downTime, physical: vitalValue['user1'].physical, focus: vitalValue['user1'].focus, connecting: vitalValue['user1'].connecting};
    res.render('result', vital);
    console.log(vital);
})



app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);

});



/* generate random string for user ID */
function generateRandomString() {
    var randomString = Math.random().toString(36).substring(7);
    return randomString;
}
generateRandomString();

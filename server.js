const express = require('express');
const bodyParser = require('body-parser')
const app = express();
var cors = require('cors');
const mongoose = require('mongoose');

// routes import
const login = require('./routes/api/login');
const test = require('./routes/api/test');
const signUp = require('./routes/api/sign-up');

//cors handling
app.use(cors());


// body parser middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

//connection file
var connection = require('./config/connection');
var mongoConnectionString = require('./config/mongo-connection');

//check mongoose connection
mongoose.connect(mongoConnectionString).then((result) =>{
  console.log("mongoose connected succesfully")
}).catch((error) => {
  console.log(error)
})


//test route
app.get('/', (req, res) => res.send("hello there !! purvi "));

//main routes
app.use('/api/test', test); /* testing test route with GET and POST with real mongoose update*/
app.use('/api/login', login);
app.use('/api/signUp', signUp);


//ports configuration
app.set('port', process.env.PORT || 3005);
app.listen(app.get('port'));
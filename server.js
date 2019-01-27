const express = require('express');
const bodyParser = require('body-parser')
const app = express();
var cors = require('cors');

// routes import
const teams = require('./routes/api/teams');
const features = require('./routes/api/feature');
const issues = require('./routes/api/issue');
const tasks = require('./routes/api/tasks');
const items = require('./routes/api/item');
const login = require('./routes/api/login');

//cors handling
app.use(cors());


// body parser middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());




//connection file
var connection = require('./config/connection');
// app.disable('etag');

//check connection
connection.connect(function(err) {
  if (err) {
    return console.error('error connecting in sql: ' + err.message);
  }
 
  console.log('Connected to the MySQL server.');
});


//test route
app.get('/', (req, res) => res.send("hello there !! purvi "));

//main routes
app.use('/api/teams', teams);
app.use('/api/features', features);
app.use('/api/issues', issues);
app.use('/api/tasks', tasks);
app.use('/api/items', items);
app.use('/api/login', login);




//ports configuration
app.set('port', process.env.PORT || 3005);
app.listen(app.get('port'));
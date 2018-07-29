const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config()
// express app
const app = express();

app.use(logger('dev'));

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

/* enable-cors.org/server_expressjs.html */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

require('./server/routes')(app);
// catch-all route, welcome in JSON
app.get('*', (req, res, next) => res.status(200).send({
  message: "Welcome to Express server.",
}));

module.exports = app;
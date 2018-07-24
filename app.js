const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// express app
const app = express();

app.use(logger('dev'));

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

// catch-all route, welcome in JSON
app.get('*', (req, res) => res.status(200).send({
  message: "Welcome to Express server.",
}));

module.exports = app;
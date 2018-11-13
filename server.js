// server.js - Theater Reservation API

const express = require('express');
const app = express();
const mongoose = require('mongoose');

// import controllers
const ApiController = require('./controllers/api');
const TheatersController = require('./controllers/theaters');
const SessionsController = require('./controllers/sessions');

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/theater_api', { useNewUrlParser: true });

// setup express to use json
app.use(express.json());

// use our controllers
app.use(ApiController);
app.use(TheatersController);
app.use(SessionsController);

app.listen(5000, () => {
  console.log('Example app listening on port 5000!');
});
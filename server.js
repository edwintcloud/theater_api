// server.js - Theater Reservation API

var express = require('express');
var app = express();

// setup express to use json
app.use(express.json());

app.get('/', (req, res, next) => {
  res.json({
    message: "Welcome to Theater API!"
  });
})

// Example stub:
app.get('/theater/name-of-route', function(req, res) {
  res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Part 2.`});
});

app.listen(5000, () => {
  console.log('Example app listening on port 3000!');
});
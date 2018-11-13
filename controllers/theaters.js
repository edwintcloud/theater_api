const router = require('express').Router();
const theater = require('../models/theater');

// create a theater
router.post('/theaters',  (req, res, next) => {
  theater.create(req.body).then(theater => {
    res.json(theater);
  }).catch(error => {
    res.json({
      message: `Oh no an error - ${error.message}`
    });
  })
});

module.exports = router;
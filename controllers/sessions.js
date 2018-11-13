const router = require('express').Router();
const theater = require('../models/theater');
const session = require('../models/session');

// create a session
router.post('/sessions',  (req, res, next) => {
  theater.find({ theaterId: req.body.theaterId }).limit(1).lean().then(theaters => {
    if(theaters.length == 0) Promise.reject();
    console.log(theaters);
    // req.body['name'] = theaters[0].
    // session.create()
  }).catch(error => {
    res.json({
      message: `Unable to find theater!`
    });
  });
});

module.exports = router;
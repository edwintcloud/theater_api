const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.json({
    message: "Welcome to Theater API!"
  });
});

module.exports = router;
const router = require('express').Router();
const Trade = require('../models/trade');

router
  .get('/tradehours', (req, res, next) => {
    Trade.tradehours()
      .then(hours => res.json(hours))
      .catch(next);
  });

module.exports = router;
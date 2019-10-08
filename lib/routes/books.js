const router = require('express').Router();
const Book = require('../models/book');

router
  .get('/pagecount', (req, res, next) => {
    Book.pagecount()
      .then(scores => res.json(scores))
      .catch(next);
  });

module.exports = router;
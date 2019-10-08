const router = require('express').Router();
const Grade = require('../models/grade');

router
  .get('/scores', (req, res, next) => {
    Grade.scores()
      .then(scores => res.json(scores))
      .catch(next);
  });

module.exports = router;
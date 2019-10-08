const router = require('express').Router();
const Student = require('../models/student');

router
  .get('/scores', (req, res, next) => {
    Student.scores()
      .then(scores => res.json(scores))
      .catch(next);
  });

module.exports = router;
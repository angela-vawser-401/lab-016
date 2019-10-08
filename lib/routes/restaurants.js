const router = require('express').Router();
const Restaurant = require('../models/restaurant');

router
  .get('/', (req, res, next) => {
    Restaurant.find()
      .lean()
      .then(restaurants => res.json(restaurants))
      .catch(next);
  })

  .get('/healthiest', (req, res, next) => {
    const limit = parseInt(req.query.limit || 10);
    const borough = req.query.borough;
    
    Restaurant.healthiest(limit, borough)
      .then(restaurants => res.json(restaurants))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    
  })



module.exports = router;
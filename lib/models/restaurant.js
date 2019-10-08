const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema();

const matchBorough = borough => ({
  $match: { borough }
});

const unwindGrades = {
  $unwind: {
    path: '$grades'
  }
};

const removeNullScores = {
  $match: {
    'grades.score': {
      $ne: null
    }
  }
};

const averageById = {
  $group: {
    _id: '$_id',
    borough: {
      $first: '$borough'
    },
    name: {
      $first: '$name'
    },
    avg: {
      $avg: '$grades.score'
    }
  }
};

const sortOnAverage = {
  $sort: {
    avg: -1
  }
};

const limitToTop = limit => ({
  $limit: limit
});

schema.static('healthiest', function(limit, borough) {
  const pipeline = [
    unwindGrades, 
    removeNullScores, 
    averageById, 
    sortOnAverage, 
    limitToTop(limit)
  ];

  if(borough) pipeline.unshift(matchBorough(borough));

  return this.aggregate(pipeline);
});

module.exports = mongoose.model('Restaurant', schema);
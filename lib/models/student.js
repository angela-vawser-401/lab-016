const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema();

schema.static('scores', function() {
  const pipeline =
    [{
      $unwind: {
        path: '$scores'
      }
    }, {
      $group: {
        _id: '$scores.type',
        minScore: {
          $min: '$scores.score'
        },
        maxScore: {
          $max: '$scores.score'
        },
        avgScore: {
          $avg: '$scores.score'
        }
      }
    }];
  return this.aggregate(pipeline);
});

module.exports = mongoose.model('Student', schema);
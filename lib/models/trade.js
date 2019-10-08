const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema();

schema.static('tradehours', function() {
  const pipeline =
    [{
      $match: {
        ticker: 'abcd'
      }
    }, {
      $project: {
        hour: { $hour: '$time' },
        shares: '$shares'
      }
    }, {
      $group: {
        _id: '$hour',
        count: {
          $sum: '$shares'
        }
      }
    }];
  return this.aggregate(pipeline);
});


module.exports = mongoose.model('Trade', schema);
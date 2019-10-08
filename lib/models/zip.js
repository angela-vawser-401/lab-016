const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema();

schema.static('population', function() {
  const pipeline =
    [{
      $group: {
        _id: '$state',
        count: {
          $sum: '$pop'
        }
      }
    }, {
      $sort: {
        count: -1
      }
    }, { $limit: 10 }];

  return this.aggregate(pipeline);
});
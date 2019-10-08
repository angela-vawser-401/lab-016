const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema();

schema.static('pagecount', function() {
  const pipeline = [{
    $unwind: {
      path: '$authors',
    }
  }, {
    $group: {
      _id: '$authors',
      avgPageCount: {
        $avg: '$pageCount'
      }
    }
  }];
  return this.aggregate(pipeline);
});

module.exports = mongoose.model('Book', schema);
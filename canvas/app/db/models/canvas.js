var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = Loc.require('app/db');

module.exports = db.model('Canvas', {
  title: String,
  slug: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: function(value) {
        return /^\w+$/.test(value);
      },
      message: '\'{VALUE}\' only one word allowed!'
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  removedAt: {
    type: Date,
    default: null
  },
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  codes: [{ type: Schema.Types.ObjectId, ref: 'Code' }],
});

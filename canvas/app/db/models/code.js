var db = Loc.require('app/db');

module.exports = db.model('Code', {
  title: String,
  body: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  removedAt: {
    type: Date,
    default: null
  }
});
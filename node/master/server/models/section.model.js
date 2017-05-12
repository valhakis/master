var mongoose = require('mongoose');

var SectionSchema = new mongoose.Schema({
   name: {
      type: String,
      required: [true, 'Section name is required.'],
      unique: [true, 'Section name must be unique.']
   }
}, {
   timestamps: true
});

module.exports = mongoose.model('Section', SectionSchema);

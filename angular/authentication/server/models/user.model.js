var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
   id: mongoose.Schema.ObjectId,
   email: {
      type: String,
      unique: true,
      required: [true, 'Email is required.']
   },
   password: {
      type: String,
      required: [true, 'Password is required.']
   },
   role: {
      type: [{
         type: String,
         enum: ['normal', 'guest', 'admin', 'master']
      }],
      default: 'normal'
   }
});

module.exports = mongoose.model('User', UserSchema);

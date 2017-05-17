var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
   id: Schema.ObjectId,
   name: String,
   firstname: {
      type: String
   },
   lastname: {
      type: String
   },
   username: {
      type: String
   },
   email: {
      type: String,
      unique: true,
      required: [true, 'Email is required.']
   },
   password: {
      type: String,
      required: [true, 'Password is required.']
   },
   deleted: {
      type: Date,
      default: null
   },
   group: {
      type: String,
      default: 'normal',
      enum: ['guest', 'normal', 'admin', 'master']
   },
   updatedAt: {
      type: Date,
      default: Date.now
   },
   createdAt: {
      type: Date,
      default: Date.now
   },
   posts: [
      {
         type: Schema.Types.ObjectId, ref: 'Post'
      }
   ]
});

UserSchema.pre('save', function(next) {
   var currentDate = new Date();

   this.updatedAt = currentDate;

   if (!this.createdAt)
      this.createdAt = currentDate;

   next();
});

module.exports = mongoose.model('User', UserSchema);

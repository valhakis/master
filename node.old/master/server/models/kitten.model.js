var mongoose = require('mongoose');

var KittenSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   birthday: {
      type: Date,
      default: Date.now
   },
   updated: {
      type: Date,
      default: Date.now
   },
   created: {
      type: Date,
      default: Date.now
   }
});

KittenSchema.methods.speak = function() {
   if (this.name) {
      console.log(`Meow name is ${this.name}.`);
   } else {
      console.log(`I don't have a name.`);
   }
};

module.exports = mongoose.model('Kitten', KittenSchema);

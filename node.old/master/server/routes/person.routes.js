var Person = GET.require('models/person.model');
var Story = GET.require('models/story.model');

var PersonController = GET.require('controllers/person.controller');

module.exports = function(app) {
   app.get('/persons', PersonController.renderIndex);
   app.post('/persons', PersonController.create);
};

var aaron = new Person({
   name: 'Aaron',
   age: 100
});


/*
Person.remove({}, function() {

   Story.remove({}, function() {
      aaron.save(function(err, person) {
         // if (err) return console.log(err);

         var story1 = new Story({
            title: 'One upon a time.',
            _creator: person._id
         });

         story1.save(function(err) {
            // if (err) return console.log(err);

            Story
               .findOne({})
               .populate('_creator')
               .exec(function(err, story) {
                  // if (err) return console.log(err);
                  console.log(story);
               });
            Person
               .findOne({})
            //.populate('_creator')
               .exec(function(err, person) {
                  // if (err) return console.log(err);
                  console.log(person);
               });
         });
      });
   });

});
*/

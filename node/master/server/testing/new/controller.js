var Person = GET.require('models/person.model');
var Post = GET.require('models/post.model');
var common = require('./common');

// Person.remove({}).exec();
// Post.remove({}).exec();

exports.index = function(req, res) {
   /*
   return Person.create({
      name: 'William Valhakis'
   });
   */
   new Promise(function(resolve, reject) {
      resolve();
   }).then(function(data) {
      return Promise.all([
         // [0] -> find persons
         new Promise(function(resolve, reject) {
            Person.find({}).exec(function(err, persons) {
               if (err) return reject(err);
               resolve(persons);
            });
         }),
         // [1] -> find posts
         new Promise(function(resolve, reject) {
            Post.find({}).exec(function(err, posts) {
               if (err) return reject(err);
               resolve(posts);
            });
         })
      ]);
   }).then(function(results) {
      return new Promise(function(resolve, reject) {
         var data = {
            persons: results[0],
            posts: results[1]
         };
         resolve(data);
      });
   }).then(function(data) {
      console.log('PERSONS:', data.persons);
      console.log('POSTS:', data.posts);
   }).then(function() {
   }).catch(function(err) {
      console.log(err);
   });

   /*
   new Promise(function(resolve, reject) {
      Promise.all([
         new Promise(function(resolve, reject) {
            Person
               .find({})
               .exec(function(err, persons) {
                  if (err) return reject(err);
                  resolve(persons);
               });
         })
      ]);
   })().then(function(result) {
      console.log(result);
   });
   */

   res.render('testing/new', {});
};

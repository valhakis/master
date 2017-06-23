var async = require('async');
var Person = GET.require('models/person.model');
var Story = GET.require('models/story.model');
var User = GET.require('models/user.model');
var Post = GET.require('models/post.model');

var local = {};

module.exports = function(app) {
   require('./new')(app);
   /*
   app.get('/testing', function(req, res) {
      User.findOne({ name: 'William Valhakis' }).exec(function(err, thomas) {
         if (err) return res.send(err);
         User.findOne({ name: 'William Valhakis' }).exec(function(err, william) {
            if (err) return res.send(err);
            res.render('testing/index', {
               william: william,
               thomas: thomas,
               stringify: function(object) {
                  var string = JSON.stringify(object, ' ', 2);
                  string.replace(/\\"/g,"\uFFFF"); //U+ FFFF
                  string = string.replace(/\"([^"]+)\":/g,"$1:").replace(/\uFFFF/g,"\\\"");
                  return string;
               }
            });
         });
      });
   });
   */
   app.get('/testing', function(req, res) {
      async.parallel({
         one: function(callback) {
            callback(null, 'one');
         },
         two: function(callback) {
            callback(null, 'two');
         },
         william: function(done) {

            User.findOne({ name: 'William Valhakis' }).exec(function(err, william) {
               if (err) return done(err);
               done(null, william);
            });

         },
         thomas: function(done) {

            User.findOne({ name: 'Thomas Overbird' }).exec(function(err, thomas) {
               if (err) return done(err);
               done(null, thomas);
            });

         },
         post: function(done) {
            Post.create({
               title: 'Hello World.'
            }, function(err) {
               if (err) return done(err);
               Post.findOne({ title: 'Hello World.' }).exec(function(err, post) {
                  if (err) return done(err);
                  if (!post) return done(null, {message: `Did not find post.`});
                  done(null, post);
               });
            });
         }
      }, function(err, result) {
         if (err) return res.send(err);
         res.render('testing/index', {
            william: result.william,
            thomas: result.thomas,
            post: result.post,
            result: result,
            stringify: function(object) {
               var string = JSON.stringify(object, ' ', 2);
               string.replace(/\\"/g,"\uFFFF"); //U+ FFFF
               string = string.replace(/\"([^"]+)\":/g,"$1:").replace(/\uFFFF/g,"\\\"");
               return string;
            }
         });
      });
   });
};

local.createPerson = function(callback) {
   var newPerson = new Person({
      name: 'William Valhakis'
   });

   newPerson.save(function(err, person) {
      if (err) return callback(err);
      callback(null, person);
   });
};

local.createStory = function(person, callback) {
   var newStory = new Story({
      title: 'Story of my life.',
      _creator: person._id
   });

   newStory.save(function(err, story) {
      if (err) return callback(err);
      callback(null, story);
   });
};

local.findStory = function(story, callback) {
   Story.findOne({ title: story.title }).populate('_creator').exec(function(err, story) {
      if (err) return callback(err);
      return callback(null, story);
   });
};


/*
   var newStory = new Story({
      title: 'New story is the best story.',
      _creator: person._id
   });
   newStory.save(function(err, story) {
      if (err) return console.log(err);
   });
   */

/*
Person.findOne({}, function(err, person) {
   if (err) return console.log(err);
      Story.find({
         _creator: person._id
      }, function(err, stories) {
         if (err) return console.log(err);
         console.log('PERSON:', person);
         console.log('STORIES', stories);
      });
});
*/

/*
Person.findOne({}).exec(function(err, person) {
   if (err) return console.log(err);
   Story.find({
      _creator: person._id
   }, function(err, stories) {
      if (err) return console.log(err);
      console.log('PERSON:', person);
      console.log('STORIES', stories);
   });
});
*/



/*
Person.findOne({}).populate('stories').exec(function(err, person) {
   if (err) return console.log(err);
   Story.find({ _creator: person._id }).populate('_creator').exec(function(err, stories) {
      if (err) return console.log(err);
      console.log('PERSON:', person);
      console.log('STORIES', stories);
      for (var i=0; i<stories.length; i++) {
         person.stories.push(stories[i]);
         person.save(function(err, person) {
            if (err) return console.log(err);
            console.log('NEW PERSON ID:', person._id);
         });
      }
   });
});
*/



/*
local.createPerson(function(err, person) {
   if (err) return console.log(err);
   local.createStory(person, function(err, story) {
      if (err) return console.log(err);
      local.findStory(story, function(err, story) {
         if (err) return console.log(err);
         person.stories.push(story);
         person.save(function(err, person) {
            if (err) return console.log(err);
            Person.findOne({ name: person.name }).populate('stories').exec(function(err, person) {
               console.log('PERSON:', person);
               console.log('STORY:', story);
            });
         });
      });
   });
});
*/

/*
var william = new User({
   name: 'William Valhakis',
   password: 'minuparool5',
   email: 'william.valhakis@gmail.com'
});

var thomas = new User({
   name: 'Thomas Overbird',
   password: 'minuparool5',
   email: 'thomas.overbird@gmail.com'
});

william.save(function(err) {
   if (err) {
      if (err.code == 11000) {
         console.log('WILLIAM:', william);
         return console.log('DUPLICATE ENTRY');
      }
      return console.log(err);
   }
});

thomas.save(function(err) {
   if (err) {
      if (err.code == 11000) {
         console.log('THOMAS:', thomas);
         return console.log('DUPLICATE ENTRY');
      }
      return console.log(err);
   }
});

var post = new Post({
   title: 'The father of all posts.',
   postedBy: william._id,
   comments: [{
      text: `I'm the comment of this post.`,
      postedBy: thomas._id
   }, {
      text: `I'm not the bird, you are.`,
      postedBy: william._id
   }]
});

Post.remove({}).exec(function() {
   post.save(function(err) {
      if (err) {
         return console.log(err);
      }
      Post.find({
         title: post.title
      }).populate('postedBy').exec(function(err, post) {
         if (err) return console.log(err);
         console.log(post);
      });
   });

});
*/

/*
User.findOne({}).exec(function(err, william) {
   if (err) return console.log(err);
   console.log('WILLIAM:', william);
});
*/

/*
User.findOne({ name: 'William Valhakis' }).exec(function(err, william) {
   if (err) return console.log(err);
   Post.create({
      title: `Hello World.`
   }, function(err, post) {
      if (err) return console.log(err);
      Post.find({_id: post._id}).exec(function(err, post) {
         if (err) return console.log(err);
         console.log(post);
      });
   });
   console.log(william);
});
*/

/*
User.findOne({ name: 'William Valhakis' }).exec(function(err, william) {
   return new Promise(function(resolve, reject) {
      if (err) return reject(err);
      resolve(william);
   });
}).then(function(william) {
   return new Promise(function(resolve, reject) {
      Post.create({
         title: 'Hello World.',
      }, function(err, post) {
         if (err) return reject(err);
         resolve(post);
      });
   });
}).then(function(post) {
   // console.log(post);
}).catch(function(err) {
   console.log(err);
});

async.parallel({
   william: function(callback) {
      User.findOne({ name: 'William Valhakis' }).exec(function(err, william) {
         if (err) return callback(err);
         callback(null, william);
      });
   },
   thomas: function(callback) {
      User.findOne({ name: 'Thomas Overbird' }).exec(function(err, thomas) {
         if (err) return callback(err);
         callback(null, thomas);
      });
   }
}, function(err, users) {
   if (err) return console.log(err);
   Post.create({
      title: `I'm really not a bird.`,
      postedBy: users.william._id,
      comments: [{
         text: `I'm a comment created by thomas.`,
         postedBy: users.thomas._id
      }, {
         text: `Nice comment you got there tomas, i'm william.`,
         postedBy: users.william._id
      }]
   }, function(err, post) {
      if (err) return console.log(err);
      // console.log(post);
   });
   // console.log(users);
});

async.parallel({
   one: function(callback) {
      callback(null, 'one');
   },
   two: function(callback) {
      callback(null, 'two');
   }
}, function(err, results) {
   if (err) return console.log(err);
   return new Promise(function(resolve, reject) {
      resolve(results);
   });
});
*/

/*
Promise.all([
   new Promise(function(resolve, reject) {
      User.findOne({ name: 'William Valhakis' }).exec(function(err, william) {
         if (err) return reject(err);
         resolve(william);
      });
   }),
   new Promise(function(resolve, reject) {
      User.findOne({ name: 'Thomas Overbird' }).exec(function(err, thomas) {
         if (err) return reject(err);
         resolve(thomas);
      });
   })
]).then(values => {
   return new Promise(function(resolve) {
      resolve({
         william: values[0],
         thomas: values[1]
      });
   });
}).then(function(users) {
   return new Promise(function(resolve, reject) {
      Post.create({
         title: `I'm really not a bird.`,
         postedBy: users.william._id,
         comments: [{
            text: `I'm a comment created by thomas.`,
            postedBy: users.thomas._id
         }, {
            text: `Nice comment you got there tomas, i'm william.`,
            postedBy: users.william._id
         }]
      }, function(err, post) {
         if (err) return reject(err);
         Post
            .findOne({ _id: post._id })
            .populate('postedBy')
            .populate('comments.postedBy')
            .exec(function(err, post) {
               if (err) return reject(err);
               resolve(post);
            });
      });
   });
}).then(function(post) {
   console.log(post);
}).catch(function(err) {
   if (err) return console.log(err);
});
*/

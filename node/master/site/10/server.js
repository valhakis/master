/* jshint undef:true */

var express = require('express');

var Sequelize = require('sequelize');

const database = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const WishList = database.define('WishList', {
  name: Sequelize.STRING
});

const Post = database.define('Post', {
  title: Sequelize.STRING,
  body: Sequelize.STRING
});

WishList.hasMany(Post, {as: 'posts'});
Post.belongsTo(WishList);

/*
database.sync({ force: true }).then(() => {
  return WishList.create({
    name: 'MY WISH LIST 1',
    posts: [{
      title: 'MY FIRST POST',
      body: 'Why do I have a wishlist?'
    }, {
      include: [Post]
    }]
  });
}).then(wishList => {

});
*/

module.exports = function(app) {
  var router = express.Router();

  router.get('/wishlists', function(req, res) {
    WishList.find({
      model: 'Post'
    }).then(wishLists => {
      res.send(wishLists);
    });
  });

  router.get('/wishlist', function(req, res) {

  });

  router.post('/wishlist/add/post', function(req, res) {
    res.send("I'M A HOOMAN BEING.");
  });

  app.use('/site/10', router);
};

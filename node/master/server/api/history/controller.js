var History = GET.require('models/history');
var Post = GET.require('models/post.model');
var Code = GET.require('models/code.model');

exports.index = function(req, res) {
   History
      .find({
         removedAt: null
      })
      .exec()
      .then(histories => {
         res.send(histories);
      }).catch(err => {
         res.send(err);
      });
};

exports.create = function(req, res) {
   History.create({
      _creator: req.body.userId
   }).then((history) => {
      res.send(history);
   }).catch(function(err) {
      res.send(err);
   });
};

exports.single = function(req, res) {
   History
      .findOne({ _id: req.params.historyId })
      .populate('posts codes')
      .exec()
      .then(history => {
         res.send(history);
         // console.log(history);
      }).catch(err => {
         res.error(err);
         // console.log(err);
      });
};

exports.remove = function(req, res) {
   History
      .findOneAndUpdate({
         _id: req.params.historyId
      }, {
         removedAt: new Date()
      }, function(err, history) {
         if (err) return res.send(err);
         res.send(history);
      });
};

exports.createPost = function(req, res) {
   Post.create({
      title: req.body.title,
      body: req.body.body,
   }, function(err, post) {
      if (err) return res.send(err);
      History.findOne({
         _id: req.params.historyId
      }).exec().then(function(history) {
         post.histories.push(history);
         post.save(function(err, post) {
            if (err) return res.send(err);
            history.posts.push(post);
            history.save(function(err, history) {
               if (err) return res.send(err);
               res.send(history);
            });
         });
      });
   });
};

exports.createCode = function(req, res) {

   Code.create({
      title: req.body.title,
      body: req.body.body,
      language: req.body.language
   }).then(code => {
      return History.findOneAndUpdate({
         _id: req.params.historyId
      }, {
         $push: {
            codes: code._id //or code
         }
      }).exec();
   }).then(history => {
      res.send(history);
   }).catch(err => {
      res.send(err);
   });
};

exports.removeCode = function(req, res) {
   //History.update({_id: req.params.historyId}, {$pullAll: {}});
   /*
   History.findOne({_id: req.params.historyId}, function(err, history) {
      if (err) return res.send(err);
      res.send({
         codes: history.codes,
         removedId: req.params.codeId
      });
   });
   */
};

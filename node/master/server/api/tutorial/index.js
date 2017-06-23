var Tutorial = GET.require('models/tutorial.model');
var controller = {};

module.exports = function(router) {
  router.post('/tutorials', controller.create);
  router.get('/tutorials', controller.findAll);
  router.get('/tutorials/:tutorialId', controller.single);
  router.delete('/tutorials/:tutorialId', controller.remove);

  router.get('/tutorials/:tutorialId/codes/:codeId', controller.singleCode);
  router.delete('/tutorials/:tutorialId/codes/:codeId', controller.removeCode);
  router.post('/tutorials/:tutorialId/codes', controller.createPost);
  router.put('/tutorials/:tutorialId/codes/:codeId', controller.updateCode);

  router.post('/tutorials/:tutorialId/notes', controller.createNote);
  router.put('/tutorials/:tutorialId/recover', controller.recover);
};

controller.createPost = function(req, res) {
  Tutorial.findOneAndUpdate({
    _id: req.params.tutorialId
  }, {
    $push: {
      codes: req.body
    }
  }, function(err, tutorial) {
    if (err) return res.status(500).send(err);
    res.send(tutorial);
  });
};

controller.createNote = function(req, res) {
  Tutorial.findOneAndUpdate({
    _id: req.params.tutorialId
  }, {
    $push: {
      notes: req.body
    }
  }, function(err, tutorial) {
    if (err) return res.status(500).send(err);
    res.send(tutorial);
  });
};

controller.findAll = function(req, res) {
  var query = {removedAt: req.query.removed ? {$ne: null} : null};
  Tutorial.find(query, function(err, tutorials) {
    if (err) return res.status(500).send(err);
    res.send(tutorials);
  });
};

controller.create = function(req, res) {
  Tutorial.create(req.body, function(err, tutorial) {
    if (err) return res.status(500).send(err);
    res.send(tutorial);
  });
};

controller.remove = function(req, res) {
  if (req.query.destroy) {
    Tutorial.remove({_id: req.params.tutorialId}, function(err, tutorial) {
      if (err) return res.status(500).send(err);
      res.send(tutorial);
    });
  } else {
    Tutorial.findOneAndUpdate({
      _id: req.params.tutorialId 
    }, {
      $set: {
        removedAt: new Date()
      }
    }, function(err, tutorial) {
      if (err) return res.status(500).send(err);
      res.send(tutorial);
    });
  }
};

controller.recover = function(req, res) {
  Tutorial.findOneAndUpdate({
    _id: req.params.tutorialId 
  }, {
    $set: {
      removedAt: null
    }
  }, function(err, tutorial) {
    if (err) return res.status(500).send(err);
    res.send(tutorial);
  });
};

controller.single = function(req, res) {
  Tutorial.findOne({_id: req.params.tutorialId}).then(function(tutorial) {
    res.send(tutorial);
  }).catch(function(err) {
    if (err) return res.status(500).send(err);
  });
};

controller.singleCode = function(req, res) {
  Tutorial.findOne({_id: req.params.tutorialId}, function(err, tutorial) {
    if (err) return res.status(500).send(err);
    var code = null;
    for (var i=0; i<tutorial.codes.length; i++) {
      if (tutorial.codes[i]._id == req.params.codeId) {
        code = tutorial.codes[i];
        break;
      }
    }

    if (!code) {
      return res.status(500).send({ message: "Did not find code by this id." });
    }
    res.send(code);
  });
};

controller.removeCode = function(req, res) {
  Tutorial.findOneAndUpdate({
    _id: req.params.tutorialId,
    'codes._id': req.params.codeId
  }, {
    $set: {
      'codes.$.removedAt': new Date()
    }
  }, function(err) {
    if (err) return res.status(500).send(err);
    res.status(200).send('REMOVED');
  });
};

controller.updateCode = function(req, res) {
  Tutorial.findOneAndUpdate({
    _id: req.params.tutorialId,
    'codes._id': req.params.codeId
  }, {
    $set: {
      'codes.$.title': req.body.title,
      'codes.$.body': req.body.body,
      'codes.$.language': req.body.language,
    }
  }, function(err) {
    if (err) return res.status(500).send(err);
    res.send('CODE HAS BEEN UPDATED');
  });
};

// var id = '592cc7c658ae640db2f1ba74';

/*
Tutorial.create({ name: 'sample' }, function(err, tutorial) {
  if (err) return console.log(err);
  console.log(tutorial);
});
*/
// var tutorialId = '592cd2ad7e86d72d584c83c8';

/*
Tutorial.findOne({_id: tutorialId}, function(err, tutorial) {
  if (err) return console.log(err);

  var code = {
    title: 'sample code',
    body: 'sample body'
  };

  // tutorial.codes.push(code);

  // tutorial.save();

  console.log(tutorial);
});
*/
/*

var code = {
  title: 'THE NEW TARGET TITLE',
  body: 'THE NEW TARGET BODY'
};

var tutorialId = '592cd2ad7e86d72d584c83c8';
var codeId = '592cd86d5bcddf3545435db9';

// add new code

  

Tutorial.findOneAndUpdate({
  _id: tutorialId,
  'codes._id': codeId
}, {
  $set: {
    'codes.$.title': code.title,
    'codes.$.body': code.body,
    'codes.$.removedAt': new Date()
  }
}, function(err, tutorial) {
  if (err) return console.log(err);
  console.log(tutorial);
});

Tutorial.update({
  _id: tutorialId,
  'codes._id': codeId
}, {
  $set: {
    'codes.$': code
  }
}, function(err, data) {
  if (err) return console.log(err);
  // console.log(data);
});

/*
Tutorial.update({
  _id: tutorialId,
  'codes._id': codeId,
}, {
  $set: {
    'codes.$.title': 'SAMPLE TITLE'
  }
}, function(err) {
  if (err) return console.log(err);
});
// remove code
/*
Tutorial.update(
  {'_id': tutorialId, 'codes._id': codeId},
  {'$set': {'codes.$.removedAt': Date.now}},
  function(err, data) {
    if (err) return console.log(err);
    // console.log(data);
  }
);
*/

    // Tutorial.update({_id: tutorialId}, {$push: {codes: code}}, done);

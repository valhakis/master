var fs = require('fs');
var db = Loc.require('app/db');
var Canvas = Loc.require('app/db/models/canvas');
var Post = Loc.require('app/db/models/post');
var Code = Loc.require('app/db/models/code');

exports.index = function(req, res) {
  Canvas.find({
    removedAt: null
  }).sort({createdAt: -1}).exec(function(error, canvases) {
    if (error) {
      res.locals.errors.push('Failed to fetch canvases.');
    } else {
      res.locals.canvases = canvases;
    }
    res.locals.createdAgo = function(createdAt) {
      var createdAt = new Date(createdAt);
      var timeNow = new Date();
      var ms = timeNow - createdAt;
      var hh = Math.floor(ms / 1000 / 60 / 60);
      ms -= hh * 1000 * 60 * 60;
      var mm = Math.floor(ms / 1000 / 60);
      ms -= mm * 1000 * 60;
      var ss = Math.floor(ms / 1000);
      ms -= ss * 1000;
      return `Created about ${hh ? hh + 'h' : ''} ${mm ? mm + 'm' : ''} ${ss}s ago.`;
      console.log(hh, mm, ss);
    };
    res.render('canvases/index');
  });
};

exports.create = function(req, res) {
  res.render('canvases/create');
};

exports.store = function(req, res) {
  var canvas = new Canvas(req.body);
  canvas.save(function(error) {
    if (error) {
      console.log(error);
      req.flash('error', 'Failed to store canvas.');
      res.redirect('back');
    } else {
      req.flash('success', 'Canvas has been created.');
      var dir = Loc.root(`public/canvases/${canvas.slug}`);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      var templateSource = fs.readFileSync(Loc.root('data/canvas.template.js'), 'utf-8');
      fs.writeFile(dir + '/main.js', templateSource, function(error) {
        if (error) {
          console.log(error);
          req.flash('error', 'Failed to create main.js file');
        } else {
          console.log('HAS BEEN CREATED');
        }
        res.redirect('back');
      });
    }

  });
};

exports.show = function(req, res) {
  Canvas.findOne({_id: req.params.id}).populate('posts').populate('codes').exec(function(err, canvas) {
    if (err) {
      console.log(err);
    } else {
      res.locals.canvas = canvas;
      res.render('canvases/show');
    }
  });
};

exports.remove = function(req, res) {
  Canvas.findOne({_id: req.params.id}, function(err, canvas) {
    if (err) {
      console.log(err);
    } else {
      res.locals.canvas = canvas;
      res.render('canvases/remove');
    }
  });
};

exports.delete = function(req, res) {
  Canvas.updateOne({_id: req.params.id}, {$set:{removedAt: new Date()}}, function(err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/canvas/canvases');
    }
  });
};

exports.renderCreatePost = function(req, res) {
  Canvas.findOne({_id: req.params.canvasId}, function(err, canvas) {
    if (err) {
      console.log(err);
    } else {
      res.locals.canvas = canvas;
      res.render('canvases/posts/create');
    }
  });
};

exports.storePost = function(req, res) {
  Canvas.findOne({_id: req.params.canvasId}, function(err, canvas) {
    if (err) {
      console.log(err);
    } else {
      var post = new Post(req.body);
      post.save(function(err) {
        if (err) {
          console.log(err);
        } else {
          canvas.posts.push(post);
          canvas.save(function(err) {
            if (err) {
              console.log(err);
            } else {
              res.redirect(`/canvas/canvases/${canvas._id}`);
            }
          });
        }
      });
    }
  });
};

exports.renderCreateCode = function(req, res) {
  Canvas.findOne({_id: req.params.canvasId}, function(err, canvas) {
    if (err) {
      console.log(err);
    } else {
      res.locals.canvas = canvas;
      res.render('canvases/codes/create');
    }
  });
};

exports.storeCode = function(req, res) {
  Canvas.findOne({_id: req.params.canvasId}, function(err, canvas) {
    if (err) {
      console.log(err);
    } else {
      var code = new Code(req.body);
      code.save(function(err) {
        if (err) {
          console.log(err);
        } else {
          canvas.codes.push(code);
          canvas.save(function(err) {
            if (err) {
              console.log(err);
            } else {
              res.redirect(`/canvas/canvases/${canvas._id}`);
            }
          });
        }
      });
    }
  });
};

exports.renderRemoved = function(req, res) {
  Canvas.find({
    removedAt: { $ne: null }
  }).sort({removedAt: -1}).exec(function(error, canvases) {
    if (error) {
      res.locals.errors.push('Failed to fetch canvases.');
    } else {
      res.locals.canvases = canvases;
    }
    res.render('canvases/removed');
  });
};

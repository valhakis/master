// /projects

var config = App.rootRequire('projects/config');
var fs = require('fs');

var sequelizeConfig = {
  development: {
    storage: `${config.root}/sequelize/data/database.sqlite`,
    dialect: "sqlite"
  }
};

fs.writeFileSync(`${config.root}/sequelize/config/config.json`, JSON.stringify(sequelizeConfig, ' ', 2));

var spawn = require('child_process').spawn;

//var db = require(config.root + '/sequelize/models');

//db.sequelize.sync().then(function() {
  //db.User.create({
    //name: 'user 1',
    //email: 'email 1'
  //}).then(user => {
    //console.log(JSON.stringify(user, ' ', 2));
  //});
//});

var handlebars = require('handlebars');
var express = require('express');
var router = express.Router();
var api = express.Router();
var path = require('path');
var bodyParser = require('body-parser');

var masterRoot = App.masterRoot;
//spawn(`${masterRoot}/node_modules/.bin/sequelize`, ['db:migrate'], {
  //cwd: `${config.root}/sequelize`,
  //stdio: 'inherit'
//});

var Sequelize = require('sequelize');
var sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: config.root + '/data/database.sqlite'
});

const Project = sequelize.define('project', {
  name: Sequelize.STRING,
  description: Sequelize.STRING
});

const Note = sequelize.define('note', {
  content: Sequelize.STRING
});

Note.hasOne(Project, { foreignKey: 'projectId' });

// Project.sync({ force: true });
// Project.sync({ force: true });

sequelize.sync().then(function() {
  var root = path.join(__dirname, '..');

  router.use(bodyParser.json());
  router.use(bodyParser.urlencoded({extended: true}));

  router.use('/api', api);

  // projects/test
  router.get('/test', function(req, res) {
    res.send('test is working');
  });

  // /projects/api/projects
  api.get('/projects', function(req, res) {
    Project.findAll().then(projects => {
      res.send(projects);
    });
  });

  api.put('/projects/:projectId/description', function(req, res) {
    var description = req.body.description;
    Project.findOne({
      where: {
        id: req.params.projectId
      }
    }).then(project => {
      project.description = description;
      project.save({fields: ['description']}).then(() => {
        res.send('DESCRIPTION HAS BEEN UPDATED');
      });
      /*
      project.updateAttributes({
        description: description
      }).on('successi', function() {
        res.send('DESCRIPTION HAS BEEN UPDATED');
      });
      */
    });
  });

  api.post('/projects/:projectId/notes', function(req, res) {
    res.send('have to create new note');
  });

  router.get('/project/:projectId', function(req, res, next) {
    if (req.url.match(/.js$/)) {
      return next();
    }
    Project.find({
      where: {
        id: req.params.projectId
      }
    }).then(project => {
      var source = fs.readFileSync(root + '/public/project/index.html', 'utf8');
      var template = handlebars.compile(source);
      var html = template({
        project: project
      });
      res.end(html);
    });
  });

  router.get('/api/static-files', function(req, res) {
    var files = fs.readdirSync(root + '/public/static-files');
    var data = [];

    files.forEach(function(file) {
      var newFile = {
        name: file,
        path: `static-files/${file}`,
        source: fs.readFileSync(`${root + `/public/static-files/${file}`}`, 'utf8'),
        ext: path.extname(file),
        hl: 'none'
      };
      switch (newFile.ext) {
        case '.c': newFile.hl = 'c'; break;
        case '.js': newFile.hl = 'js'; break;
        default: break;
      }
      data.push(newFile);
    });

    res.json(data);
  });

  router.post('/project/create', function(req, res) {
    console.log(req.body);
    Project.create(req.body).then(project => {
      console.log(JSON.stringify(project, ' ', 2));
    });
    res.redirect('back');
  });

  router.use(express.static(root + '/public'));
  router.get('*', function(req, res) {
    if (req.xhr || req.headers['x-requested-with'] == 'XMLHttpRequest') {
      res.send('no such xhr');
    } else {
      res.sendFile(root + '/public/404.html');
    }
    console.log(req.xhr);
  });

});
module.exports = router;

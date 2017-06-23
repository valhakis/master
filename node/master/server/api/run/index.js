var spawn = require('child_process').spawn;
var path = require('path');
var fs = require('fs');
var controller = {};

var Tmp = {};
Tmp.root = path.join(__dirname, '../../../tmp');
Tmp.file = Tmp.root + '/index.js';


Tmp.setFileContent = function(data) {
   fs.writeFileSync(this.file, data, 'utf8');
};

Tmp.setFileContent(`console.log('example')`);


var process = {
   start: function(code) {
      Tmp.setFileContent(code);
      if (this.spawn) {
         this.spawn.kill();
      }
      this.spawn = spawn('node', ['index.js'], {
         cwd: Tmp.root,
         stdio: 'inherit'
      });
   }
};


module.exports = function(app) {
   app.post('/api/run', controller.run);
};

controller.run = function(req, res) {
   process.start(req.body.code);

   res.send({message: "Where are my potatoes."});
};

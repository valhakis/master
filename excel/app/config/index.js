module.exports = function(app) {
  var exphbs  = require('express-handlebars');

  var blocks = {};

  var hbs = exphbs.create({
    helpers: {
      JSON: function(input) {
        return JSON.stringify(input, ' ', 2);
      },
      url: function(input) {
        return '/excel' + input;
      },
      concat: function(path) {
        var arg = Array.prototype.slice.call(arguments, 0);
        arg.pop();
        return arg.join('');
      },
      box: function(name, context) {
        var block = blocks[name];
        if (!block) {
          block = blocks[name] = [];
        }

        block.push(context.fn(this)); // for older versions of handlebars, use block.push(context(this));
      },
      boxen: function(name) {
        var val = (blocks[name] || []).join('\n');

        // clear the block
        blocks[name] = [];
        return val;
      }
    },
    extname: '.hbs', 
    defaultLayout: 'base', 
    layoutsDir: Loc.root('views/layouts'),
    partialsDir: Loc.root('views/partials'),
  });

  app.set('views', Loc.root('views'));
  app.locals.basedir = Loc.root('views');
  app.set('view engine', '.hbs');
  app.engine('.hbs', hbs.engine);
};


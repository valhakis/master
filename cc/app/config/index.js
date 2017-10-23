module.exports = function(app) {
  var exphbs  = require('express-handlebars');
  var slashes = require('slashes');

  var blocks = {};

  var hbs = exphbs.create({
    helpers: {
      escape: function(input) {
        return slashes.add(input);
        // return input.replace(/'/g, "\\\'");
      },
      JSON: function(input) {
        return JSON.stringify(input, ' ', 2);
      },
      url: function(input) {
        // console.log(app.mountpath);
        return '/site' + input;
        // return app.mountpath + '/' + input;
      },
      concat: function(path) {
        var arg = Array.prototype.slice.call(arguments, 0);
        arg.pop();
        return arg.join('');
      },
      equals: function(v1, v2, options) {
        console.log(v1, v2);
        if (v1 === v2) {
          return options.fn(this);
        }
        return options.inverse(this);
      },
      link: function(label, path) {
        return `<a href="/site${path}" class="${this.path == path ? 'w3-green' : ''} w3-bar-item w3-button">${label}</a>`;
      },
      linkn: function(label, path) {
        function strncmp(str1, str2, n) {
          str1 = str1.substring(0, n);
          str2 = str2.substring(0, n);
          return ( ( str1 == str2 ) ? 0 :
                  (( str1 > str2 ) ? 1 : -1 ));
        }
        return `<a href="/site${path}" class="${strncmp(path, this.path, path.length) == 0 ? 'w3-green' : ''} w3-bar-item w3-button">${label}</a>`;
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
    layoutsDir: Loc.root('views/lay'),
    partialsDir: Loc.root('views/part'),
  });

  app.set('views', Loc.root('views'));
  app.locals.basedir = Loc.root('views');
  app.set('view engine', '.hbs');
  app.engine('.hbs', hbs.engine);
};

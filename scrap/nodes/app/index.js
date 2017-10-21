define(function(require) {
  var canvas = require('./canvas');
  var ctx = canvas.getContext('2d');

  var Node = require('./Node');
  var nodes = require('./nodes');

  var w = window.innerWidth;
  var h = window.innerHeight;

  nodes.add(new Node({id: 1, x: 20, y: 20, children: [2, 3]}));
  nodes.add(new Node({id: 2, x: 20, y: 80}));
  nodes.add(new Node({id: 3, x: 80, y: 80}));

  var render = function() {
    ctx.clearRect(0, 0, w, h);

    nodes.update();

    requestAnimationFrame(render);
  };
  render();
});

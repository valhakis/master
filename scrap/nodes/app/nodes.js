define(function(require) {
  var ctx = require('./canvas').getContext('2d');
  var nodes = {
    nodes: [],
    add: function(node) {
      this.nodes.push(node);
    },
    findById: function(id) {
      for (var i=0; i<this.nodes.length; i++) {
        if (this.nodes[i].id === id) {
          return this.nodes[i];
        }
      }
    },
    update: function() {
      this.nodes.forEach(node => {
        if (node.children.length > 0) {
          node.children.forEach(childId => {
            var childNode = this.findById(childId);
            ctx.beginPath();
            ctx.strokeStyle = 'white';
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(childNode.x, childNode.y);
            ctx.stroke();
          });
        }
        node.update();
      });
    }
  };
  return nodes;
});

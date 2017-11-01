define(function(require) {

  var mode = {
    mode: 'default',
    is: function(mode) {
      return mode === this.mode;
    },
    set: function(mode) {
      this.mode = mode;
    },
    modes: []
  };

  return mode;
});

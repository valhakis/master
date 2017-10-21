define(function(require) {

  var image = new Image();
  image.src = 'bankCheck.jpg';

  return class Check {
    constructor() {
      this.image = image;
    }
  };
});

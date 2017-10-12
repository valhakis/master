var button = document.body.querySelector("button");
var bar = new ProgressBar.Line('#container', {easing: 'easeInOut'});

button.addEventListener('click', function() {
  if (bar.value() == 0) {
    bar.animate(1);  // Value from 0.0 to 1.0
  } else {
    bar.animate(0);  // Value from 0.0 to 1.0
  }
});

var bar2 = new ProgressBar.Line("#container-2", {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#F18F01',
  trailColor: '#eee',
  trailWidth: 3,
  svgStyle: {
    width: '95%',
    height: '100%'
  },
  text: {
    value: 'what is that'
    // value: 'type' + '&nbsp;' + 'Percentage' * 10
  },
  className: 'progressbar_linelabel',
  style: {
    color: '#f00',
    position: 'absolute',
    top: '-60%',
    padding: 0
  }
});

bar2.animate(1);

/*
function AnimateLine(container_id, animatePercentage, type) {
  var element = document.getElementById(container_id);

  var bar = new ProgressBar.Line(element, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#F18F01',
    trailColor: '#eee',
    trailWidth: 3,
    svgStyle: {width: '95%', height: '100%'},

    text: {
      // Initial value for text.
      // Default: null
      value: type+' &nbsp  '+Percentage*10;

      // Default: 'progressbar-text'
      className: 'progressbar_linelabel',
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: '#f00',
        position: 'absolute',
        top: '-60%',
        padding: 0,
      }
    }
  });

*/

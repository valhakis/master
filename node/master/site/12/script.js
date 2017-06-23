var startChange = $("#header h1");

var offset = startChange.offset();

$(document).scroll(function() {

  // console.log($(window).scrollTop());
  var scrollStart = $(this).scrollTop();
  var offsetTop = offset.top - startChange.height();
  
  if (scrollStart > offsetTop) {
    $("#nav").css({
      'background-color': '#eee'
    });
  } else {
    $("#nav").css({
      'background-color': 'transparent'
    });
  }
});

class Widget {
  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('widget');
    this.container.innerText = 'DEFAULT WIDGET';
    document.body.appendChild(this.container);
  }
}

class WindowWidget extends Widget {
  constructor() {
    super();
    this.container.classList.add('window');
    this.container.innerText = '';
    this.nav = document.createElement('div');
    this.nav.classList.add('nav');
    this.nav.innerText = '#nav';
    this.container.appendChild(this.nav);
    //window.addEventListener('scroll', () => {
      //this.container.innerText = window.scrollY;
    //});
  }
}

class MainWindowWidget extends Widget {
  constructor() {
    super();
    this.container.classList.add('main-window');
    this.container.innerText = '';

    this.window = new WindowWidget();

    this.header = document.createElement('div');
    this.header.classList.add('header');
    this.h1 = document.createElement('h1');
    this.h1.innerText = '#header h1';
    this.header.appendChild(this.h1);
    this.container.appendChild(this.header);

    var offsetTopDiv = document.createElement('div');
    offsetTopDiv.innerText = '$("#header h1").offset()';
    offsetTopDiv.classList.add('offset-top-div');
    this.container.appendChild(offsetTopDiv);

    //window.offsetTopDiv = offsetTopDiv;
    window.h1 = this.h1;

    var scrollTopDiv = document.createElement('div');
    scrollTopDiv.classList.add('scroll-top-div');
    scrollTopDiv.innerText = '$(window).scrollTop() -> 0px';

    this.container.appendChild(scrollTopDiv);

    this.updateWindow = (scrollTop) => {
      this.window.container.style.marginTop = scrollTop + 'px';
      scrollTopDiv.innerText = '$(window).scrollTop() -> ' + scrollTop + 'px';
      scrollTopDiv.style.height = scrollTop + 'px';
      scrollTopDiv.style.lineHeight = scrollTop + 'px';
      offsetTopDiv.style.height = $(this.h1).offset().top - $(this.container).offset().top + 'px';
      offsetTopDiv.style.lineHeight = $(this.h1).offset().top - $(this.container).offset().top + 'px';
      console.log($(this.h1).offset().top);
    };

    this.scrollBar = new ScrollBarWidget(this.updateWindow);

    this.container.appendChild(this.window.container);
    this.container.appendChild(this.scrollBar.container);
  }
}

class ScrollBarWidget extends Widget {
  constructor(updateWindow) {
    super();
    this.updateWindow = updateWindow;
    this.container.innerText = '';
    this.container.classList.add('scroll-bar');
    this.scroller = document.createElement('div');
    this.scroller.classList.add('scroller');
    this.container.appendChild(this.scroller);
    var mouseDown = false;
    var scrollTop = 0;
    var currentScrollerPosition = 6;

    this.scroller.addEventListener('mousedown', (event) => {
      event.preventDefault();
      mouseDown = event.clientY;
    });
    this.scroller.addEventListener('mouseup', (event) => {
      event.preventDefault();
      currentScrollerPosition = scrollTop;
      this.scroller.style.marginTop = currentScrollerPosition;
      mouseDown = false;
    });
    window.addEventListener('mouseup', (event) => {
      if (mouseDown) {
        currentScrollerPosition = scrollTop;
        this.scroller.style.marginTop = currentScrollerPosition;
        mouseDown = false;
      }
    });

    // var currentScrollerPosition = this.scroller.style.marginTop;

    var min = 6;


    // this.scroller.style.marginTop = 60;
    // this.scroller.style.marginTop = '100px';


    window.addEventListener('mousemove', (event) => {
      if (mouseDown) {
        var max = this.scroller.parentNode.clientHeight - this.scroller.clientHeight;
        // console.log(mouseDown, event.clientY, event.clientY - mouseDown);
        // this.scroller.style.marginTop = event.clientY - mouseDown;
        // scrollTop = event.clientY - mouseDown;


        scrollTop = currentScrollerPosition  + (event.clientY - mouseDown);

        if (scrollTop < min) {
          scrollTop = min;
        } else if (scrollTop > max) {
          scrollTop = max;
        }

        this.scroller.style.marginTop = scrollTop + 'px';
        this.updateWindow(scrollTop - min);
      }
    });
  }
}

// var widget = new Widget();

// var windowWidget = new WindowWidget();
var mainWindowWidget = new MainWindowWidget();

var minScroll = 0;
var maxScroll = $(document).height() - $(window).height();

$("#scroll-div .heading").text('#(document).scrollTop()');

$("#scroll-div .nav").top = 300;

$(document).scroll(function() {

  $("#sample-div").text($(document).scrollTop());


  var scrollTop = $(document).scrollTop();

  $("#scroll-div .content").text(`$(document).scrollTop() => ${scrollTop}`);
  // 500 -> x%
  //  maxScroll: 100%;
  // x = scrollTop * 100 / maxScroll;

  var scrollTopPrecentage = scrollTop * 100 / maxScroll;

  $("#scroll-div .content").css({
    top: scrollTopPrecentage + '%'
  });

  $("#scroll-div .nav").css({
    top: scrollTopPrecentage + '%',
    'margin-left': '-' + $("#scroll-div .nav").width() + 'px'
  });

  $("#scroll-div .header").css({
    top: $("#header h1").offset().top * 100 / maxScroll + '%',
    'margin-left': '-' + $("#scroll-div .header").width() + 'px'
  });
  $("#scroll-div .header").text(`#header h1 | $("#header h1").offset().top => ${$("#header h1").offset().top}`);

});

swal({
  title: response.title || 'TITLE IS NOT SET', 
  text: response.message || 'MESSAGE IS NOT SET', 
  type: response.status || 'STATUS IS NOT SET'
}, function() {

});

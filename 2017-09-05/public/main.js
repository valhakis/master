var re = /ab+c/;
var re = /abc/;
var re = /Chapter (\d+)\.\d*/;
var re = new RegExp('ab+c');

var lines = [
  'Elit cum at perspiciatis reprehenderit?',
  'Consectetur neque tempora soluta voluptates.',
  'Amet id ullam est vitae',
  'Ipsum reiciendis quasi laboriosam hic',
];

// a(b)/g
// "aabb"

lines.forEach(function(line, index) {
  var success = false;

  if (/\.$/i.test(line)) {
    success = true;
  }

  // console.log(`${index} ${line}`);
  // console.log(`> ${success ? 'MATH' : 'NO MATCH'}`);
});

var text = 'p';

if (/^p$/i.test(text)) {
  // console.log('THE GREAT FIND');
}

document.querySelector("#date").innerHTML = Date();
setInterval(function() {
  document.querySelector("#date").innerHTML = Date();
}, 1000);

class MainController {
  constructor() {
  }
}

class AbcController extends MainController {
  constructor($element) {
    super();
    var template = `
      <div class="t1">
        <h2>TITLE</h2>
        <p>
          Sit corporis in fugiat labore repellat sunt? 
          Consequuntur <% youtube:hyYnAioXOqQ %> quos laudantium optio in sit optio Nihil 
          ea deserunt nostrum obcaecati <% youtube:a2ofh21 %> obcaecati Ad enim 
          expedita odit facere voluptatibus Natus corporis 
          consequuntur labore.
        </p>
      </div>
    `;
    var html = Handlebars.compile(template)();
    $element.innerHTML = html;
    $element.style.borderColor = 'blue';
  }
}

class WidgetController extends MainController {
  constructor($element) {
    super();
    $element.style.borderColor = 'red';
  }
}

class RegController {
  constructor(element) {
    element.style.borderColor = 'red';
    var pattern = element.querySelector(`input[name='pattern']`);
    var string = element.querySelector(`input[name='string']`);

    var update = function() {
      if (new RegExp(pattern.value, 'i').test(string.value)) {
        element.style.borderColor = 'green';
        element.style.backgroundColor = 'rgba(0, 255, 0, 0.3)';
      } else {
        element.style.borderColor = 'red';
        element.style.backgroundColor = 'rgba(255, 0, 0, 0.3)';
      }
    };

    pattern.addEventListener('keyup', function() {
      update();
    });

    string.addEventListener('keyup', function() {
      update();
    });
  }
}

var run = {
  word1: function() {
    console.log('WORD 1 EXECUTED');
  },
  word2: function() {
    console.log('WORD 2 EXECUTED');
  },
  word3: function() {
    console.log('WORD 3 EXECUTED');
  },
  word4: function() {
    console.log('WORD 4 EXECUTED');
  }
};

var words = 'word1 word2 word3 word4 example';
words.split(' ').forEach(function(word) {
  if (typeof run[word] == 'function') {
    run[word]();
  } else {
    console.log(`WORD '${word}' IS NOT A FUNCTION`);
  }
});

var Register = function(name, classP) {
  var elements = document.body.querySelectorAll(`div[controller='${name}']`);
  elements.forEach(function(element) {
    new classP(element);
  });
};

Register('AbcController', AbcController);
Register('WidgetController', WidgetController);
Register('RegController', RegController);

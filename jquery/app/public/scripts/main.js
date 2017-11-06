var main_container;

(function() {
  main_container = document.createElement('div');

  main_container.classList.add('main-container');

  main_example_01_start();
  main_example_02_start();

  document.body.appendChild(main_container);
})();

function main_add_code(dom_target, code) {
  $(document).ready(function() {
    var dom_pre = document.createElement('pre');
    var dom_code = document.createElement('code');

    var indented_code = js_beautify(code, {
      indent_size: 2,
      indent_char: ' ',
      indent_with_tabs: false
    });

    var highlighted_code = Prism.highlight(indented_code, Prism.languages.javascript);

    dom_code.innerHTML = highlighted_code;

    dom_pre.appendChild(dom_code);
    $('#'+dom_target)[0].appendChild(dom_pre);
  });
}

function main_example_01_start() {
  var id = 'main-example-01';
  var source = `
    <div id="${id}">
      <div class="content">
        <h3 class="title">Hide Element</h3>
        <button>Hide</button>

      </div>
    </div>
  `;

  $(document).ready(function() {
    $(`#${id} button`).click(function() {
      $(this).hide();
    });
  });

  var code = `
    $('.main-example-01 button').click(function() {
      $(this).hide();
    });
  `;

  main_container.innerHTML += Handlebars.compile(source)();
  main_add_code(id, code);
}

function main_example_02_start() {
  var id = 'main-example-02';
  var source = `
    <div id="${id}">
      <div class="content">
        <h3 class="title">Hide Element</h3>
          <div class="body">
            <button>Hide</button>
            <p>Hide all elements.</p>
            <p>Hide all elements.</p>
            <p>Hide all elements.</p>
            <p>Hide all elements.</p>
          </div>
      </div>
    </div>
  `;

  $(document).ready(function() {
    $(`#${id} *`).click(function() {
      $(this).hide();
    });
  });

  var code = `
    $('.main-example-01 *').click(function() {
      $(this).hide();
    });
  `;

  main_container.innerHTML += Handlebars.compile(source)();
  main_add_code(id, code);
}

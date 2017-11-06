(function() {

  console.log('STATUS LOADED');

  var dom_main_status = document.createElement('div');
  dom_main_status.classList.add('main-status');

  dom_main_status.addEventListener('dblclick', function() {
    if (this.style.height == '300px') {
      this.style.height = '50px';
    } else {
      this.style.height = '300px';
    }
  });

  document.body.appendChild(dom_main_status);

  function main_status_scroll_bottom() {
    dom_main_status.scrollTop = dom_main_status.scrollHeight;
  }

  function main_status_add_text(text) {
    var div = document.createElement('div');
    div.innerHTML = text;
    dom_main_status.appendChild(div);
    main_status_scroll_bottom();
  }

  main_status_add_text(window.location.href);
  main_status_add_text(document.URL);
  main_status_add_text(window.location.protocol);
  main_status_add_text(window.location.host);
  main_status_add_text(window.location.pathname);

  console.log('Path Array', window.location.pathname.split('/'));

})();

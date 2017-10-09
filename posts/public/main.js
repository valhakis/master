var Main = {
  ToggleNext: function(btn) {
    var nextElement = btn.nextElementSibling;

    nextElement.style.display = nextElement.style.display == 'block' ? 'none' : 'block';
  }
};

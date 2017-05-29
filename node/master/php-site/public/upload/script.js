var domForm = document.getElementById('form').cloneNode(true);
var domAddGroupBtn = domForm.querySelector('.addGroup');
var domGroup = domForm.querySelector('.group');

domAddGroupBtn.addEventListener('click', function() {
  var domNewGroup = domGroup.cloneNode(true);
  domGroup.parentNode.insertBefore(domNewGroup, domGroup.nextSibling);
});

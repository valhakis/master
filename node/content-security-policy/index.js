/* global google */

var nets = require('nets');

/* add new comment on form submit */
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  var comment = document.querySelector('textarea').value;

  nets({
    url: '/addcomment',
    method: 'POST',
    body: comment
  }, function() {
    location.reload();
  });
}, false);

/* google map */
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 58.703631, lng: 25.1219776},
    scrollwheel: false,
    zoom: 7
  });
}

window.initMap = initMap;

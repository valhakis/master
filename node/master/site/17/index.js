var images = {
  'pledis': 'https://upload.wikimedia.org/wikipedia/commons/2/21/Pledis_Entertainment_logo.png',
  'sayTheName': 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/a6d95e15667507.56372fa9c4d5d.png'
};

document.getElementById('HistHover').addEventListener('click', function() {
  document.getElementById('Hist').classList.add('animate');                                        });                                        

document.getElementById('MembHover').addEventListener('click', function() {
  document.getElementById('Memb').classList.add('animate');
});

document.getElementById('MedHover').addEventListener('click', function() {
  document.getElementById('Med').classList.add('animate');
});

document.getElementById('HomeButton').addEventListener('click', function() {
  document.getElementById('Hist').classList.add('animate2');
});

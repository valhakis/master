var dev = 'http://192.168.0.3:5000';

var tag = document.querySelector("button[tag=dev]");

var start = function() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var data = JSON.parse(this.responseText);
			if (data.started) {
				tag.classList.remove('w3-red');
				tag.classList.add('w3-green');
			}
		}
	};
	xhr.open('GET', dev + '/mongo/start', true);
	xhr.send(null);
};

tag.addEventListener('click', function() {
	start();
});

start();


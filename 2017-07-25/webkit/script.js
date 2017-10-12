var path = require('path');
var fs = require('fs');

/*
nw.App.registerGlobalHotKey(new nw.Shortcut({
	key: 'Escape',
	active: function() {
		process.exit();
	}
}));
*/

(function() {
	var elements = document.querySelectorAll('load-source');
	elements.forEach(function(element) {
		var file = element.getAttribute('file');
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				// var source = this.responseText.replace('\t', '  ');
				var code = this.responseText;

				var nw = Prism.plugins.NormalizeWhitespace;

				code = nw.normalize(code, {
					'remove-trailing': true,
					'remove-indent': true,
					'left-trim': true,
					'right-trim': true,
					// 'indent': 1,
					'remove-initial-line-feed': false,
					'tabs-to-spaces': 2,
				});

				code = Prism.highlight(code, Prism.languages.c);
				element.innerHTML = `
				<div class="panel panel-default">
					<div class="panel-heading">
						${element.innerText}
					</div>
					<div class="panel-body">
						<pre><code class="language-c">${code}</code></pre>
					</div>
					<div class="panel-footer">
						<button class="btn btn-primary">EDIT</button>
					</div>
				</div>
					`;
			}
		}
		xhr.open('GET', file, true);
		xhr.send(null);
	});
})();

(function() {
	var links = document.querySelectorAll("link-to");
	links.forEach(function(link) {
		var target = link.getAttribute('target');
		var targetElement = document.querySelector(`#${target}`);
		link.addEventListener('click', function() {
			window.scrollTo(0, targetElement.offsetTop - 10);
		});
	});
})();

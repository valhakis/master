if (localStorage.theme) {
	var link = document.createElement('link');

	link.rel = 'stylesheet';
	link.href = `/prismjs/themes/${localStorage.theme}`;
	document.head.appendChild(link);
}

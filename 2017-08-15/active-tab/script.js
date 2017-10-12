if (localStorage.activeTab) {
	var activeTab = localStorage.activeTab;
	$('.tab-links li').each(function() {
		var item = this.getAttribute('item');
		if (item == activeTab) {
			$(this).addClass('active');
			$('.tab').hide();
			$(item).show();

			window.location.hash = item;
		}
	});
}

$(".tab-links li a").click(function() {
	var parent = this.parentNode;
	var item = parent.getAttribute("item");
	$('.tab-links li.active').removeClass('active');
	$(parent).addClass('active');
	$('.tab').hide();
	$(item).show();

	window.location.hash = item;
	localStorage.activeTab = item;
});

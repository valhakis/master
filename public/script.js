$(document).on('focus', '.example', function() {
	$(this).parent().addClass('focus');
});

$(document).on('blur', '.example', function() {
	$(this).parent().removeClass('focus');
});

/*
$(document).on('focus ', ".mask-text input[type='text'], .mask-text input[type='password']", function (e) {
	$(this).parents(".mask-text").addClass("focused");
});
$(document).on('blur ', ".mask-text input[type='text'], .mask-text input[type='password'] ", function (e) {
	if ($(this).val() == undefined) {
		$(this).parents(".mask-text").removeClass("focused");
	}
});
*/

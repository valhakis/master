$("#port").val(4010);

$("#start").click(function() {
	$.ajax({
		url: 'start',
		data: {
			zipcode: 23422,
			port: $("#port").val()
		},
		success: function(result) {
			$("#box").html($("<div>").text(`http://192.168.0.2:${$("#port").val()}`));
			console.log(result);
		}
	});
});

$("#exit").click(function() {
	$.ajax({
		url: 'exit',
		data: {
			// zipcode: 23422,
			// port: $("#port").val()
		},
		success: function(result) {
			console.log(result);
		}
	});
});

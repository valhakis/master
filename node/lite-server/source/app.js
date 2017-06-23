
// 20/5/2017 7:10 PM

setInterval(function() {
   $("span#time").text(moment(new Date()).format('DD/M/YYYY LTS'));
}, 1000);

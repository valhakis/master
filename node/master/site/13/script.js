$('#all_artists artist-single').on('click',function(){
  // window.location.href="artist-single.html";
  var num = $(this).data('number');

  console.log('NUM:', num);

  $.getJSON('data.json',function(data) {
    $('#name').html(data[num].name);
    $('#description').html(data[num].bio);
    $('#logo').append('<img src=data[num].logo>');
  });
});

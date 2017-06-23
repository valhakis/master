var api = '/site/10';

$.get(api + '/WishLists', function(data) {
  console.log(data);
});

$(".wishlist").click(function() {
  var pId = $(this).attr('value');
  var wishlistId = $(this).attr('id');
  var wishlisted = $(this).attr('wishlisted');

  if(wishlisted == '0')
  {
    //$.post("{{route('wishlistAddPost')}}",
    $.post(api + "/wishlist/add/post",
      {
        profileID: pId,
        userId : 1,
        _token: $('[name="csrf_token"]').attr('content'),
      },
      function(data, status){
        if(status == "success")
        {
          $.notify("Profile is Added In wishlist ", "success");
          $("#"+wishlistId).addClass('wishlistSelected');
          $(this).attr('wishlisted', 1);
          alert($(this).attr('wishlisted'));
        }
        else
        {
          $.notify("Error in Addingin Wishlist", "error");
        }
      });    
  }
  else if(wishlisted == 1)
  {


    $.post("{{route('wishlistRemovePost')}}",
      {
        profileID: pId,
        userId : 1,
        _token: $('[name="csrf_token"]').attr('content'),
      },
      function(data, status){
        if(status == "success")
        {  
          $.notify("Profile Remove From Wishlist", "info");
          $("#"+wishlistId).removeClass('wishlistSelected');
          $(this).attr('wishlisted', '0');
          alert($(this).attr('wishlisted'));
        }
        else
        {
          $.notify("Error in Addingin Wishlist", "error");
        }
      });    
  }
  else
  {
    $.notify("Wrong Input", "error");
  }
});

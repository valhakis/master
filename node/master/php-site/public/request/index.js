/* global swal */

function DeletePost() {
  swal({
    title: "Sei Sicuro?",
    text: "Questa operazione non è reversibile ed eliminerà la comunicazione i commenti ad essa connessi dal database!",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "Si, elimina comunicazione!",
    cancelButtonClass: "btn btn-danger",
    cancelButtonText: "No, non procedere!",
    closeOnConfirm: false,
    closeOnCancel: false
  }, function(isConfirm) {
    if (isConfirm) {

      $.ajax({
        url: "server.php",
        method: "POST",
        dataType: 'json',

        success: function(response) {
          // swal('Deleted!', response.message, response.status);
          console.log(response);
          swal({

            title: response.title, 
            text: response.message, 
            type: response.status

          },

            function(){ 

              location.reload();

            }

          );

        },

        error: function(response) {
          // console.log(response.responseText);
          document.body.innerHTML = response.responseText;
          return;
          // console.log(response.responseText);

          swal({

            title: response.title,
            text: response.message, 
            type: response.status

          });


        }



      }); 

    } else {
      swal("Annulato!", "Operazione annullata con successo!", "error");
    }
  });
}

DeletePost();

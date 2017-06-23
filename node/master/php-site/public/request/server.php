<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  // Prelevo l'id dell'amministratore e lo passo ad una variabile
  $userid = $_SESSION['user_id'];

  if($delete_inbox  = mysqli_prepare($conn, "DELETE FROM user_inbox where user_inbox_user=? AND user_inbox_status = 'trash'")){ 

    mysqli_stmt_bind_param($delete_inbox, 'i', $userid);
    mysqli_stmt_execute($delete_inbox);
    mysqli_stmt_close($delete_inbox);

    // Passo messaggio di risposta se l'operazione è andata a buon fine
    $response['title']  = 'Messaggi eliminati!';
    $response['message'] = 'Tutti i messaggi sono stati eliminati con successo.';
    $response['status']  = 'success';

  }else{

    // Passo messaggio di risposta se l'operazione non è andata a buon fine
    $response['title']  = 'Si è verificato un errore!';
    $response['message'] = 'Non è stato possibile eliminare i messaggi. Per favore contatta amministratore di sistema';
    $response['status']  = 'error';

  }

  echo json_encode($response);

}

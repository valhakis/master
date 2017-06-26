<?php
$student_name = 'Thomas Lastname';
$Kode = 'noone';
?>

  <a href="#" onclick="return confirm('are you sure <?php echo $student_name; ?>')">sample</a>

<a target="_self" onclick="return confirm('sample')" alt="Delete Data">
<a href="?open=Class-Delete&amp;Kode=<?php echo $Kode; ?>" class="btn-danger style17">what is this link</a>

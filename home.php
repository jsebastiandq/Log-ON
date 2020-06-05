<!DOCTYPE html>
<html lang="en">
<head>
<title>Dashboad - Log-ON</title>
<?php require_once('components/header.php'); ?>
<?php require_once('components/session.php'); ?>
<section id="content">
    <section class="main">
      <h2 class="main__title">¿Qué quieres buscar?</h2>
      <input class="search-home" type="text" class="input" placeholder="Buscar...">
      <center><a href="tasks.php"><button class="button">Agregar una tarea</button></a></center>
    </section>
</section>
<?php require_once('components/footer.php'); ?>
</body>
</html>
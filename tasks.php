<!DOCTYPE html>
<html lang="en">
<head>
<title>Ver Tareas - Log-ON</title>
<?php require_once('components/header.php'); ?>
<?php require_once('components/session.php'); ?>
<br>
<div class="container-sm">
<h2 class="main__title">Lista de tareas</h2>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>Estado</th>
                <th>Tarea</th>
                <th>Asignado</th>
                <th>Fecha de Inicio</th>
                <th>Fecha Final</th>
                <th colspan="3">Acciones</th>
            </tr>
        </thead>
        <tbody id="viewTasks">
        </tbody>
    </table>
    <div id="viewTask">
    <div id="ediTask">
</div>
</body>
<!-- JS Additional -->
<script src="js/tasks.js" type="text/javascript" charset="utf-8" async defer></script>
<script src="js/readuserstask.js" type="text/javascript" charset="utf-8" async defer></script>
</html>
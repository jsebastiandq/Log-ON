<!DOCTYPE html>
<html lang="en">
<head>
<title>Ver Usuarios - Log-ON</title>
<?php require_once('components/header.php'); ?>
<?php require_once('components/session.php'); ?>
<br>
<div class="container-sm">
<h2 class="main__title">Lista de usuarios</h2>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>Documento</th>
                <th>Nombres</th>
                <th>Email</th>
                <th>Telefono</th>
                <th colspan="2">Acciones</th>
            </tr>
        </thead>
        <tbody id="viewUsers">
        </tbody>
    </table>
    <div id="editUser">
</div>
</body>
<!-- JS Additional -->
<script src="js/users.js" type="text/javascript" charset="utf-8" async defer></script>
</html>
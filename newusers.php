<!DOCTYPE html>
<html lang="en">
<head>
<title>Crear Usuarios - Log-ON</title>
<?php require_once('components/header.php'); ?>
<?php require_once('components/session.php'); ?>
<br>
<div class="container-sm">
    <h2 class="main__title">¿Que usuarios quieres agregar?</h2>
    <form name="userForm">
        <div class="row"> 
            <div class="form-group col-md-6">
                <label>Documento</label>
                <input type="text" class="form-control" id="documento" placeholder="Documento" required>
            </div>
            <div class="form-group col-md-6">
                <label>Nombres</label>
                <input type="text" class="form-control" id="nombres" placeholder="Nombres Completo" required>
            </div>
        </div> 
        <div class="row">       
            <div class="form-group col-md-6">
                <label>Email</label>
                <input type="email" class="form-control" id="email" placeholder="Email" required>
            </div>             
            <div class="form-group col-md-6">
            <label>Telefono</label>
            <input type="number" class="form-control" id="telefono" required="required" placeholder="Télefono" required>
            </div>
        </div>
        <button type="submit" class="button sendUser">Agregar</button>
    </form>
</div>
</body>
</html>
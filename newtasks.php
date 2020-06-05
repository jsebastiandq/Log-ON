<!DOCTYPE html>
<html lang="en">
<head>
<title>Crear Tarea - Log-ON</title>
<?php require_once('components/header.php'); ?>
<?php require_once('components/session.php'); ?>
<section class="main">
    <div class="container">
    <h2 class="main__title">¿Que tarea quieres agregar?</h2>
    <form name="taskForm">
        <div class="row"> 
            <div class="form-group col-md-6">
                <label>Nombre de la Tarea</label>
                <input type="text" class="form-control" id="tarea" placeholder="Nombre de Tarea" required>
            </div>
            <div class="form-group col-md-6">
            <label>Responsable</label>
                <select class="form-control" id="usuario">         
                </select>
            </div>
        </div> 
        <div class="row"> 
            <div class="form-group col-md-4">
                <label>Prioridad</label>
                <select class="form-control" id="prioridad">
                    <option value="Baja">Baja</option> 
                    <option value="Media">Media</option>    
                    <option value="Alta">Alta</option>            
                </select>
            </div>
            <div class="form-group col-md-4">
                <label>Relacionado</label>
                <select class="form-control" id="relacionado">
                    <option value="Proyecto">Proyecto</option> 
                    <option value="Factura">Factura</option>    
                    <option value="Cliente">Cliente</option>
                    <option value="Soporte">Soporte</option>             
                </select>
            </div>
            <div class="form-group col-md-4">
                <label>Estado</label>
                <select class="form-control" id="estado">
                    <option value="No iniciada">No iniciada</option> 
                    <option value="En proceso">En proceso</option>    
                    <option value="Testear">Testear</option>
                    <option value="Completada">Completada</option>             
                </select>
            </div>
        </div> 
        <div class="row">       
            <div class="form-group col-md-6">
            <label>Fecha de Inicio</label>
            <input type="date" class="form-control" id="fechai" required="required" required value="<?php echo date('Y-m-d'); ?>" />
            </div>             
            <div class="form-group col-md-6">
            <label>Fecha de final</label>
            <input type="date" class="form-control" id="fechaf" required="required" required>
            </div>
        </div>
        <div class="row">       
            <div class="form-group col-md-12">
            <label>Descripcion de tarea</label>
            <textarea class="form-control" id="descripcion" required="required" placeholder="Ingresa aqui el comentario de la tarea..." required></textarea>
            </div>             
        </div>  
        <button type="submit" class="button sendTask">Agregar</button>
    </form>
    </section>
    </section>
</body>
<!-- JS Additional -->
<script src="js/readuserstask.js" type="text/javascript" charset="utf-8" async defer></script>
</html>
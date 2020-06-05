<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <!-- Font -->
  <link href="https://fonts.googleapis.com/css?family=Muli&display=swap" rel="stylesheet">
  <!-- Firebase -->
  <script src="https://www.gstatic.com/firebasejs/7.14.1/firebase-app.js"></script>
	<script src="https://www.gstatic.com/firebasejs/7.14.1/firebase-analytics.js"></script>
	<script src="https://www.gstatic.com/firebasejs/7.14.1/firebase-auth.js"></script>
	<script src="https://www.gstatic.com/firebasejs/7.14.1/firebase-firestore.js"></script>
  <!-- Styles -->
  <link rel="stylesheet" href="css/styles.css">
  <link rel="shortcut icon" href="assets/favicon.png" />
  <!-- JS -->
  <script src="js/settings.js" type="text/javascript" charset="utf-8" async defer></script>
  <script src="js/jquery-3.5.0.min.js"></script>
  <script src="bootstrap/js/bootstrap.min.js" type="text/javascript" charset="utf-8" async defer></script>
  <!-- Title -->
  <title>Error - Log-ON</title>
</head>
<body>
  <header class="headerlogin">
    <img class="header__img" src="assets/logo.png" alt="Logo Log-ON">
  </header>
  <section class="login">
      <section class="login__container">
        <h2>Inicia sesión</h2>
        <div class="login__container--form">
        <p class="login__container--info">La información es incorrecta!!</p>
        <input class="input" type="email" name="email" placeholder="Correo" id="email" required="required">
        <input class="input" type="password" name="password" placeholder="Contraseña" id="password" required="required">
        <button class="button" id="login">Iniciar sesión</button>
        <div class="login__container--remember-me">
            <label>
              <input type="checkbox" name="" id="cbox1" value="checkbos">Recuérdame
            </label>
            <a href="/lost-password.html">¿Olvidé mi contraseña?</a>
          </div>
        </div>
        <!--<section class="login__container--social-media">
          <div><img src="./assets/google-icon.png" alt="Google">Inicia sesión con Google</div>
          <div><img src="./assets/twitter-icon.png" alt="Twitter">Inicia sesión con Twitter</div>
        </section>-->
        <p class="login__container--register">No tienes ninguna cuenta <a href="">Regístrate</a></p>
      </section>
  </section>
  <?php require_once('components/footer.php'); ?>
</body>
</html>

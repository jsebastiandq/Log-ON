<head>
  <meta charset="UTF-8">
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
    <link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css">
    <link rel="shortcut icon" href="assets/favicon.png" />
    <!-- JS -->
    <script src="js/settings.js" type="text/javascript" charset="utf-8" async defer></script>
    <script src="js/crud.js" type="text/javascript" charset="utf-8" async defer></script>
    <script src="js/jquery-3.5.0.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js" type="text/javascript" charset="utf-8" async defer></script>
</head>
<body>
<div class="header">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img class="header__img" src="./assets/logo.png" alt="Logo">
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
    <?php require_once('components/menu.php'); ?>
  </div>
</nav>
</div>
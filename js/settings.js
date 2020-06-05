// firebase 
var firebaseConfig = {
  apiKey: "AIzaSyB0gRAj7AotMdiI0mdBQt0JgJFfj0dZlso",
  authDomain: "log-on-aaa0b.firebaseapp.com",
  databaseURL: "https://log-on-aaa0b.firebaseio.com",
  projectId: "log-on-aaa0b",
  storageBucket: "log-on-aaa0b.appspot.com",
  messagingSenderId: "18063448118",
  appId: "1:18063448118:web:59f8ded6651dc2ed0de097",
  measurementId: "G-RCX90P7C28"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

$(document).ready(function(){

  // Login
  $("#login").click(function(){
    var email = $("#email").val();
    var password = $("#password").val();
    if (email != "" && password != "") {
        loginUser(email, password);
    } else {
      document.location="./error.php";
    }
  });

  // Sign Out
  $("#closeuser").click(function(){
    signoutUser();
  });

  function loginUser(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function (user) {
      loadLoginAccess();
    })
    .catch(function (error) {
      document.location="./error.php";
    });
  };

  function signoutUser() {
    firebase.auth().signOut().then(function() {
      localStorage.clear();
      loadLoginAccess();
    }).catch(function(error) {
      // An error happened.
    });
  };

  function loadLoginAccess(){
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        var uid = user.uid;
        localStorage.setItem("id",uid);
        $(location).attr('href','home.php'); 
      } else {
        $(location).attr('href','index.php');
      }
    });
  };
  
});

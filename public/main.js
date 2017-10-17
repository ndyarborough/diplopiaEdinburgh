////////////////////////
// Signup modal /////////

var signUpModal = document.getElementById('signUpModal');
var signUpBtn = document.getElementById("signUpBtn");
var signup = document.getElementById("signup");
var signUpSpan = document.getElementsByClassName("signUpClose")[0];

// When the user clicks on the button, open the modal
signUpBtn.onclick = function() {
        signUpModal.style.display = "block";
    }
signUp.onclick = function() {
        signUpModal.style.display = "block";
    }
// When the user clicks on <span> (x), close the modal
signUpSpan.onclick = function() {
        signUpModal.style.display = "none";
    }
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == signUpModal) {
        signUpModal.style.display = "none";
    }

}
////////////////////////
// Login modal /////////

var loginModal = document.getElementById('loginModal');
var loginBtn = document.getElementById("loginBtn");
var login = document.getElementById("login");
var loginSpan = document.getElementsByClassName("loginClose")[0];

// When the user clicks on the button, open the modal
loginBtn.onclick = function() {
        loginModal.style.display = "block";
    }
login.onclick = function() {
        loginModal.style.display = "block";
    }
// When the user clicks on <span> (x), close the modal
loginSpan.onclick = function() {
        loginModal.style.display = "none";
    }
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
}

$('#signUpForm').on('click', function(event) {
    event.preventDefault();

    var userData = {
        email: $('#signUpEmail').val().trim(),
        password: $('#signUpPassword').val().trim()
    };

    if (!userData.email || !userData.password) {
      alert('You must enter a Email and Password!');      
      return;
    }

    signUpUser(userData.email, userData.password);
    $('#signUpEmail').val("");
    $('#signUpPassword').val("");
    $('#signUpPassword2').val("");
  });

  function signUpUser(email, password) {
    $.post("/api/register", {
      email: email,
      password: password
    }).then(function(data) {
      console.log(data);
      if (data.errors) {
        alert('Error: ' + data.errors[0].message);
      }
      else {
        window.location.replace(data);
      }
    }).catch(function(err) {

    });
  }

  $('#logInForm').on('click', function(event) {
    event.preventDefault();

    var userData = {
        email: $('#logInEmail').val().trim(),
        password: $('#logInPassword').val().trim()
    };

    if (!userData.email || !userData.password) {
      alert('You must enter a Email and Password!')
      return;
    }

    $.post('/api/login', {
        email: userData.email,
        password: userData.password
    }).then(function(data) {
      window.location.replace(data)
    }).catch(function(err) {
      console.log(err);
    })

    $('#logInEmail').val("");
    $('#logInPassword').val("");
  });
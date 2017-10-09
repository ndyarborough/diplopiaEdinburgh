////////////////////////
// Signup modal /////////

var signUpModal = document.getElementById('signUpModal');
var signUpBtn = document.getElementById("signUpBtn");
var signUpSpan = document.getElementsByClassName("signUpClose")[0];

// When the user clicks on the button, open the modal
signUpBtn.onclick = function() {
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
var loginSpan = document.getElementsByClassName("loginClose")[0];

// When the user clicks on the button, open the modal
loginBtn.onclick = function() {
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
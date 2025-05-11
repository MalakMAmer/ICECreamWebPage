
let logInDiv = document.getElementById("logInDiv");
let signUpDiv = document.getElementById("signUpDiv");
let display= 1;

function showLogin(){
    logInDiv.style.display = 'block' ;
    signUpDiv.style.display = 'none' ;
}
function showSignup(){
    logInDiv.style.display = 'none' ;
    signUpDiv.style.display = 'block' ;
}
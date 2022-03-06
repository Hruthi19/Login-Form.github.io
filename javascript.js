var attempt=3;
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "username" && password == "pass#123"){
alert ("Login successfully");
return false;
}
else{
attempt --;// Decrementing by one.
alert("Login Unsuccessful.You have "+attempt+" attempts left;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
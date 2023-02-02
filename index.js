let attempt = 3;

function validate(){
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if ( username == "User" && password == "Password123"){
    window.location = "store.html"; 
    return false;
  }
  else{
    attempt --;
    if (attempt === 1) {
      alert("You have 1 attempt left");
    } else {
      alert("You have " + attempt + " attempts left");
    }

    if( attempt == 0){
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
      return false;
    }
  }
}

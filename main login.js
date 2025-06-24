
 let formSubmit = document.getElementById("formSubmit");
 let email = document.getElementById("email");
 let password = document.getElementById("password");
 let watchOut = document.getElementById("watchOut");
 let watchThis = document.getElementById("watchThis");


 formSubmit.addEventListener("submit" , function(e){
    e.preventDefault();
    if(email.value == ""  || password.value == ""){
        watchOut.style.display = "block";
        watchThis.style.display = "block";

    }else{
        window.location.href = "index.html";
    }
 })

 email.addEventListener("keyup" , function(){
      watchOut.style.display = "none";

 })
  password.addEventListener("keyup" , function(){
      watchThis.style.display = "none";

 })
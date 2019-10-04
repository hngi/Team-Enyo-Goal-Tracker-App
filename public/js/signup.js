// userinterface validation using javascript  
$(document).ready(function(){
   $("form").submit(function(e){
    var email = $("#email").val();
    var pswd = $("#password").val();
    var pass = $("#password-confirm").val();
    var name = $("#name").val();
                        
   if ((email =="") && (pass == "") && (pswd == "")){
        $('#say').html("Fill in the required fields*");
        e.preventDefault();
          }
     else if ((email!="" && pswd != "") && pass == ""){
       $("#password-confirm").css("border", "1px solid red");
        e.preventDefault();
           }
     else if ((email!="" && pass != "") && pswd == ""){
       $("#password").css("border", "1px solid red");
           e.preventDefault();
        }else if (email!="" && pswd != pass){
          $("#say").html("Password did not match");
           e.preventDefault();
          }
     else if ((pswd!="" && pass != "") && email == ""){
        $("#email").css("border", "1px solid red");
       e.preventDefault();
         }
     else if ((pswd =="" && pass == "") && email != ""){
        $("#password").css("border", "1px solid red");
       $("#password-confirm").css("border", "1px solid red");
         e.preventDefault();
         }
      else if ((email =="" && pass == "") && pswd != ""){
      $("#email").css("border", "1px solid red");
      $("#password-confirm").css("border", "1px solid red");
         e.preventDefault();
         }
      else if ((email =="" && pswd == "") && pass != ""){
       $("#email").css("border", "1px solid red");
       $("#password").css("border", "1px solid red");
         e.preventDefault();
        }else{
          return ('submit');
             }
          });
      });
         


//password match validation through disabling submit button if passwords do not match//

function checkPassword () {
    var createPassword = document.getElementById("password");
    var verifyPassword = document.getElementById("password-confirm");

    if(createPassword.value !== verifyPassword.value){
        document.getElementById("submit").disabled = true;
        alert("passwords do not match!");
    }else {
        document.getElementById("submit").disabled = false;

    }

}

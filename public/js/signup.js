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

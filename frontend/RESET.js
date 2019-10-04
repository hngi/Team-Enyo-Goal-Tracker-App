function validatePassword() {
    var newPassword = document.getElementById("newPassword");
    var confirmPassword = document.getElementById("confirmPassword");

    if (newPassword.value !== confirmPassword.value) {
        document.getElementById("submit").disabled = true;
        alert("Password do not match!");
    }else {
        document.getElementById("submit").disabled = false;
    }
}


 
function validateE(email) {
    var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return pattern.test(email);
}


function validateEmail() {
    var email = document.getElementById("email").value;
    if (!validateE(email)) {
        alert("Address is not valid");
    } else {
        alert("Thanks! We will answer you soon.\nCheck your e-mail)");
    }
}
function validate(id1, id2) {
    if(checkEqual(id1, id2) && checkLength(id1, id2)) {
        document.getElementById("valmsg").innerHTML = "Password validated!";
    }
}

function checkEqual(id1, id2) {
    let pw1 = document.getElementById(id1);
    let pw2 = document.getElementById(id2);
    if(pw1 == pw2) {
        return true;
    }
    else {
        document.getElementById("msg1").innerHTML = "Passwords do not match."
        return false;
    }
}

function checkLength(id1, id2) {
    if((pw1.length <= 8) || (pw2.length <=8))
    {
        document.getElementById("msg2").innerHTML = "Password must be at least 8 characters long.";
        return true;
    }
}

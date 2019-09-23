function validate(id1, id2) {
    checkEqual(id1, id2);
    checkLength(id1, id2);
}

function checkEqual(id1, id2) {
    let pw1 = document.getElementById(id1);
    let pw2 = document.getElementById(id2);
    if(pw1 == pw2) {
        document.getElementById("msg1").innerHTML = "Password validated!";
    }
    else {
        document.getElementById("msg1").innerHTML = "Passwords do not match."
    }
}

function checkLength(id1, id2) {
    if((pw1.length <= 8) || (pw2.length <=8))
    {
        document.getElementById("msg2").innerHTML = "Password must be at least 8 characters long.";
    }
}

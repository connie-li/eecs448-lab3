function checkEqual(id1, id2) {
    let pw1 = document.getElementById(id1);
    let pw2 = document.getElementById(id2);
    if(pw1 == pw2) {
        document.getElementById("msg").innerHTML = "Password validated!";
    }
    else {
        document.getElementById("msg").innerHTML = "Passwords do not match."
    }
}

function checkLength(id1, id2) {
    if((pw1.length() >= 8) || (pw3.length() >=8))
    {
        
    }
}

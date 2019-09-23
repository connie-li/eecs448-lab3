function validate(id1, id2) {
    if(document.getElementById(id1) == document.getElementById(id2)) {
        document.getElementById("msg1").innerHTML = "Password validated!";
    }
    else {
        document.getElementById("msg1").innerHTML = "Passwords do not match."
    }
}

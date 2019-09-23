function validate(id1, id2) {
    if(document.getElementById(id1) == document.getElementById(id2)) {
        document.getElementById("msg").innerHTML = "Password validated!";
    }
    else {
        document.getElementById("msg").innerHTML = "Passwords do not match."
    }
}

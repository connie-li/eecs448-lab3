function validate(id1, id2) {
    let input1 = document.getElementById(id1).value;
    let input2 = document.getElementById(id2).value;
    if(checkEqual(input1, input2) && checkLength(input1, input2)) {
        document.getElementById("valmsg").innerHTML = "Password validated!";
    }
    else {
        document.getElementById("valmsg").innerHTML = "Password rejected.";
    }
}

function checkEqual(input1, input2) {
    if(input1 == input2) {
        document.getElementById("msg1").innerHTML = "";
        return true;
    }
    else {
        document.getElementById("msg1").innerHTML = "Passwords do not match.";
        return false;
    }
}

function checkLength(input1, input2) {
    if((input1.length < 8) || (input2.length <8))
    {
        document.getElementById("msg2").innerHTML = "Password must be at least 8 characters long.";
        return false;
    }
    else {
        document.getElementById("msg2").innerHTML = "";
        return true;
    }
}

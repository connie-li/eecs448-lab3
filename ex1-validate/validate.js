function validate(id1, id2) {
    let input1 = document.getElementById(id1).value;
    let input2 = document.getElementById(id2).value;
    if(checkEqual(input1, input2) && checkLength(input1, input2)) {
        document.getElementById("valmsg").innerHTML = "Password validated!";
    }
}

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

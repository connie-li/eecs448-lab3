let contents = document.getElementById("contents");

function transform() {
    let borderR = document.getElementById("borderR").value;
    let borderG = document.getElementById("borderG").value;
    let borderB = document.getElementById("borderB").value;
    let borderW = document.getElementById("borderW").value;
    let bgR = document.getElementById("bgR").value;
    let bgG = document.getElementById("bgG").value;
    let bgB = document.getElementById("bgB").value;
    contents.style.borderColor = "rgb(" + borderR + "," + borderG + "," + borderB + ")";
    contents.style.borderWidth = borderW + "px";
    contents.style.backgroundColor = "rgb(" + bgR + "," + bgG + "," + bgB + ")";
}
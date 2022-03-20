function myFunction() {
    var x = document.getElementById("myLinks");
if (x.style.display === "block") {
    x.style.display = "none";
} else {
x.style.display = "block";
}
}
    
function ChangeText(oFileInput, sTargetID) {
document.getElementById(sTargetID).value = oFileInput.value;
}

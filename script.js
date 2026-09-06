/*Adjust Navbar Depending on Screen Size*/
var firstToggle = true;

function adjustNavBar() {
    var x = document.getElementById("global-navbar");

    if (firstToggle == true) {
        if (x.className === "navbar") {
            x.className = "navbar";
        } else {
            x.className += " responsive";
        }

        firstToggle = false;
    } else {
        if (x.className === "navbar") {
            x.className += " responsive";
        } else {
            x.className = "navbar";
        }
    }
}

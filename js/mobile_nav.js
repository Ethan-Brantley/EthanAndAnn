var navigation = document.getElementById("nav-bar");
var element = document.getElementById("burger");
var leftX = document.getElementById("top");
var middle = document.getElementById("middle");
var rightX = document.getElementById("bottom");

function toggleMenu() {
    element.classList.toggle("collapse");
    leftX.classList.toggle("rotate30");
    middle.classList.toggle("rotate30");
    rightX.classList.toggle("rotate30");

    if(element.classList.contains("collapse")) {
        navigation.style.visibility = "visible";
        navigation.style.width = "200px";
    }
    else
    {
        navigation.style.visibility = "hidden";
        navigation.style.width = "0px";
    }
}
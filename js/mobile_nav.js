var navigation = document.getElementById("nav-bar");
var menu = document.getElementById("burger");
var products = document.getElementById("product-list");
var leftX = document.getElementById("top");
var middle = document.getElementById("middle");
var rightX = document.getElementById("bottom");

function toggleMenu() {
    menu.classList.toggle("collapse");
    leftX.classList.toggle("rotate30");
    middle.classList.toggle("rotate30");
    rightX.classList.toggle("rotate30");

    if(menu.classList.contains("collapse")) {
        navigation.style.visibility = "visible";
        navigation.style.width = "200px";
    }
    else
    {
        navigation.style.visibility = "hidden";
        navigation.style.width = "0px";
    }
}

function toggleProducts() {

    
    products.classList.toggle("invisible");
    products.classList.toggle("product-list");

}
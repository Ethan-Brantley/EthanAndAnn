function mobileNavigation() {
    var navList = document.getElementById("mobileSidebar");
    var main = document.getElementById("main");
    var icon = document.getElementById("menuIcon");

    if(navList.style.width === "0px")
    {
        navList.style.display = "block";
        navList.style.width = "10em";
        main.style.marginLeft = "10em";
        icon.style.left = "11em";
    }
    else
    {
        navList.style.width = "0px";
        main.style.marginLeft = "0px";
        icon.style.left = "0px";
        navList.style.display = "none";
    }

}
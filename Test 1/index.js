var SideBar;
var Ori;

window.onload = function () {
    SideBar = document.getElementById("Side");
    Ori = document.getElementById("Ori");

    SideBar.style.marginTop = "50px";
}

window.onscroll = function () {
    let height = window.scrollY

    if (height != 0) {
        SideBar.style.marginTop = "0px";
        Ori.style.display = "none";

        SideBar.style.borderBottom = "1px solid black" ;
    }

    else if (height == 0)
    {
        Ori.style.display = "block";
        SideBar.style.marginTop = "50px";
        SideBar.style.borderBottom = "none";
    }
};


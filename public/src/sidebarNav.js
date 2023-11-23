const sidebarNav = () => {
    const sidebar = document.getElementById("mySidenav").style.width;
    const body = document.getElementById("main").style.marginLeft;
    if (sidebar === "0px" && body === "0px" || sidebar === "" && body === "") {
        document.getElementById("mySidenav").style.width = "220px";
        document.getElementById("main").style.marginLeft = "220px";
    } else {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
};
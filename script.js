function togglesidebar() {
    const sidebarWhole =document.getElementById("sidebar");
    const sidebarButtonsAll = document.getElementById ("SidebarUl");
    if (sidebar.style.width === '0px') {
        sidebar.style.width = '230px';
        sidebar.style.padding = ".4rem .8rem";
        sidebarButtonsAll.style.display = "flex";
    }
    else{
        sidebar.style.width = 0
        sidebar.style.padding = 0 
        sidebarButtonsAll.style.display = "none";
        }
    }
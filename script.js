function togglesidebar() {
    const sidebarWhole =document.getElementById("sidebar");
    const sidebarButtons = document.querySelectorAll (".sidebar ul li a");
    const sidebarButtonsAll = document.querySelectorAll (".sidebar ul");
    if (sidebar.style.width === '0px') {
        sidebar.style.width = '230px';
        sidebar.style.padding = ".4rem .8rem";
        sidebarButtons.style.borderRadius = "50%";
        sidebarButtonsAll.style.display = "flex";
    }
    else{
        sidebar.style.width = 0
        sidebar.style.padding = 0 
        sidebarButtons.style.borderRadius = "0.5rem";
        sidebarButtonsAll.style.display = "none";

        }
    }
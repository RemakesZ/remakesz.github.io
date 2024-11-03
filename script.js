function togglesidebar() {
    const toggleSidebar =document.getElementById("sidebar");
    const sidebarButtons = document.querySelectorAll (".sidebar ul li a");
    const sidebarButtonDesc = document.querySelectorAll (".sidebar ul li a span");
    if (sidebar.style.width === '0px') {
        sidebar.style.width = '230px';
        sidebarButtonDesc.style.display = "inline-block";
        sidebarButtons.style.borderRadius = "50%";
    }
    else{
        sidebar.style.width = 0
        sidebarButtonDesc.style.display = "none";
        sidebarButtons.style.borderRadius = "0.5rem";

        }
}
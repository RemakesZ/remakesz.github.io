function togglesidebar() {
    const toggleSidebar =document.getElementById("sidebar");
    const sidebarButtons = document.querySelectorAll (".sidebar ul li a")
    const sidebarButtonDesc = document.querySelectorAll (".sidebar ul li span")
    if (sidebar.style.width === '0px') {
        sidebar.style.width = '230px'
        span.style.opacity = '1';

        
    }
    else{
        sidebar.style.width = 0
        span.style.opacity = '0';
        }
}
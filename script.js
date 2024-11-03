function togglesidebar() {
    const togglesidebar =document.getElementById("sidebar");
    if (sidebar.style.width === '0px') {
        sidebar.style.width = '230px'
    }
    else{
        sidebar.style.width = 0
    }
}
function togglesidebar() {
    const toggleSidebar =document.getElementById("sidebar");
    const sidebarButtons = document.querySelectorAll (".sidebar ul li a");
    const sidebarButtonDesc = document.querySelectorAll (".sidebar ul li a span");
    if (sidebar.style.width === '0px') {
        sidebar.style.width = '230px';
        sidebarButtons.style.borderRadius = "50%";
        sidebarButtonDesc.forEach((span) => {
            span.style.display = span.style.display === "flex" ? "block" : "flex";
              });
    }
    else{
        sidebar.style.width = 0
        sidebarButtons.style.borderRadius = "0.5rem";
        sidebarButtonDesc.forEach((span) => {
        span.style.display = span.style.display === "none" ? "block" : "none";
          });
        }
    }
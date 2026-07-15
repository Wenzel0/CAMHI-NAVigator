/*==================================================
                SIDEBAR
==================================================*/

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");

/* Open Sidebar */

function openSidebar(){

    sidebar.classList.add("open");
    sidebarOverlay.classList.add("show");

}

/* Close Sidebar */

function closeSidebar(){

    sidebar.classList.remove("open");
    sidebarOverlay.classList.remove("show");

}

/* Toggle Sidebar */

menuBtn.addEventListener("click",()=>{

    sidebar.classList.toggle("open");
    sidebarOverlay.classList.toggle("show");

});

/* Click Outside */

sidebarOverlay.addEventListener("click",()=>{

    closeSidebar();

});

/* ESC Key (Desktop) */

document.addEventListener("keydown",(e)=>{

    if(e.key === "Escape"){

        closeSidebar();

    }

});

document.querySelectorAll(".sidebar-link").forEach(link=>{

    link.addEventListener("click",()=>{

        closeSidebar();

    });

});

/*==================================================
                DARK MODE
==================================================*/

const darkModeToggle =
document.getElementById("darkModeToggle");

/* Load Saved Theme */

const savedTheme =
localStorage.getItem("theme");

if(savedTheme === "dark"){

    document.body.classList.add("dark-mode");

    darkModeToggle.checked = true;

}

/* Toggle Theme */

darkModeToggle.addEventListener("change",()=>{

    document.documentElement.classList.add("theme-transition");

    if(darkModeToggle.checked){

        document.body.classList.add("dark-mode");

        localStorage.setItem("theme","dark");

    }else{

        document.body.classList.remove("dark-mode");

        localStorage.setItem("theme","light");

    }

    setTimeout(()=>{

        document.documentElement.classList.remove("theme-transition");

    },350);

});
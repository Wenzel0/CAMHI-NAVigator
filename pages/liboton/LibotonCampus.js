/* ==========================
   Dropdown
========================== */

const dropdown = document.querySelector(".dropdown");
const dropBtn = document.querySelector(".drop-btn");
const showNavBtn = document.getElementById("showNavBtn");

dropBtn.addEventListener("click",(e)=>{

    e.stopPropagation();

    dropdown.classList.toggle("active");

});

document.addEventListener("click",()=>{

    dropdown.classList.remove("active");

});

/* ==========================
   Page Transition
========================== */

function changePage(page){

    document.body.classList.add("transition");

    setTimeout(()=>{

        window.location.href = page;

    },500);

}

/* ==========================
   Navigation Buttons
========================== */

document.getElementById("backBtn").onclick=()=>{

    changePage("../ChooseSchool.html");

};

document.querySelectorAll(".dropdown-menu a")[0].onclick=(e)=>{

    e.preventDefault();

    changePage("../MainCampus/MainCampus.html");

};

document.querySelectorAll(".dropdown-menu a")[1].onclick=(e)=>{

    e.preventDefault();

};

/* ==========================
   Zoom & Drag
========================== */

const map = document.getElementById("campusMap");
const wrapper = document.getElementById("mapWrapper");

let scale = 1;
let x = 0;
let y = 0;

let dragging = false;

let startX = 0;
let startY = 0;

function updateMap(){

    map.style.transform =
    `translate(${x}px, ${y}px) scale(${scale})`;

}

wrapper.addEventListener("wheel",(e)=>{

    e.preventDefault();

    if(e.deltaY < 0){

        scale += 0.15;

    }else{

        scale -= 0.15;

    }

    scale = Math.max(1,Math.min(scale,6));

    updateMap();

});

wrapper.addEventListener("mousedown",(e)=>{

    dragging = true;

    startX = e.clientX - x;
    startY = e.clientY - y;

});

window.addEventListener("mouseup",()=>{

    dragging = false;

});

window.addEventListener("mousemove",(e)=>{

    if(!dragging) return;

    x = e.clientX - startX;
    y = e.clientY - startY;

    updateMap();

});

/* Double Click Reset */

wrapper.addEventListener("dblclick",()=>{

    scale = 1;

    x = 0;
    y = 0;

    updateMap();

});

/* ==========================
   Mobile Fullscreen
========================== */

const navbar = document.querySelector(".navbar");
const mapPage = document.querySelector(".map-page");

function hideNavbar(){

    if(window.innerWidth <= 900){

        navbar.classList.add("hidden");
        mapPage.classList.add("fullscreen");

        showNavBtn.classList.add("show");

    }

}

function showNavbar(){

    navbar.classList.remove("hidden");
    mapPage.classList.remove("fullscreen");

    showNavBtn.classList.remove("show");

}

showNavBtn.addEventListener("click",()=>{

    showNavbar();

});

/* ==========================
   Touch Drag
========================== */

wrapper.addEventListener("touchstart",(e)=>{

    hideNavbar();

    if(e.touches.length != 1) return;

    dragging = true;

    startX = e.touches[0].clientX - x;
    startY = e.touches[0].clientY - y;

},{passive:false});

wrapper.addEventListener("touchmove",(e)=>{

    if(!dragging) return;

    x = e.touches[0].clientX - startX;
    y = e.touches[0].clientY - startY;

    updateMap();

},{passive:false});

wrapper.addEventListener("touchend",()=>{

    dragging = false;

});

/* ==========================
   Double Tap
========================== */

let lastTap = 0;

wrapper.addEventListener("touchend",()=>{

    const now = Date.now();

    if(now - lastTap < 300){

        showNavbar();

    }

    lastTap = now;

});
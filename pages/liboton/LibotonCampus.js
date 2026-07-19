/* ==========================
   Dropdown
========================== */

const dropdown = document.querySelector(".dropdown");
const dropBtn = document.querySelector(".drop-btn");
const showNavBtn = document.getElementById("showNavBtn");
const fullscreenBtn = document.getElementById("fullscreenBtn");

const zoomControls = document.getElementById("zoomControls");
const zoomInBtn = document.getElementById("zoomInBtn");
const zoomOutBtn = document.getElementById("zoomOutBtn");

const mapInfo = document.getElementById("mapInfo");

const infoBtn = document.getElementById("infoBtn");


/* ==========================
   Page Transition
========================== */

function changePage(page){

    document.body.classList.add("transition");

    setTimeout(()=>{

        window.location.href = page;

    },100);

}

/* ==========================
   Navigation Buttons
========================== */

document.getElementById("backBtn").onclick=()=>{

    changePage("../ChooseSchool.html");

};

document.querySelectorAll(".dropdown-menu a")[0].onclick=(e)=>{

    e.preventDefault();

    changePage("../main/MainCampus.html");

};

document.querySelectorAll(".dropdown-menu a")[1].onclick=(e)=>{

    e.preventDefault();

};

/* ==========================
   Zoom & Drag
========================== */

const map = document.getElementById("campusMap");
const wrapper = document.getElementById("mapWrapper");

let initialPinchDistance = 0;
let initialScale = 1;

let scale = 1;
let x = 0;
let y = 0;

let dragging = false;

let startX = 0;
let startY = 0;

function getDistance(touch1, touch2){

    const dx = touch2.clientX - touch1.clientX;
    const dy = touch2.clientY - touch1.clientY;

    return Math.sqrt(dx * dx + dy * dy);

}

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

    const minScale = window.innerWidth <= 900 ? 0.45 : 1;

scale = Math.max(minScale, Math.min(scale,6));

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
        fullscreenBtn.classList.add("hide");
        zoomControls.classList.add("show");

    }

}

function showNavbar(){

    navbar.classList.remove("hidden");
    mapPage.classList.remove("fullscreen");

    showNavBtn.classList.remove("show");

    fullscreenBtn.classList.remove("hide");
    zoomControls.classList.remove("show");

}

showNavBtn.addEventListener("click",()=>{

    showNavbar();

});

/* ==========================
   Touch Drag
========================== */

wrapper.addEventListener("touchstart",(e)=>{

    e.preventDefault();

    if(e.touches.length === 1){

        dragging = true;

        startX = e.touches[0].clientX - x;
        startY = e.touches[0].clientY - y;

    }

    else if(e.touches.length === 2){

        dragging = false;

        initialPinchDistance = getDistance(
            e.touches[0],
            e.touches[1]
        );

        initialScale = scale;

    }

},{passive:false});

wrapper.addEventListener("touchmove",(e)=>{

    e.preventDefault();

    /* One Finger = Drag */

    if(e.touches.length === 1 && dragging){

        x = e.touches[0].clientX - startX;
        y = e.touches[0].clientY - startY;

        updateMap();

    }

    /* Two Fingers = Pinch Zoom */

    else if(e.touches.length === 2){

        const currentDistance = getDistance(
            e.touches[0],
            e.touches[1]
        );

        scale = initialScale *
            (currentDistance / initialPinchDistance);

        const minScale =
            window.innerWidth <= 900 ? 0.45 : 1;

        scale = Math.max(
            minScale,
            Math.min(scale,6)
        );

        updateMap();

    }

},{passive:false});

wrapper.addEventListener("touchend",()=>{

    dragging = false;

});

fullscreenBtn.addEventListener("click",()=>{

    hideNavbar();

});

/* ==========================
   Zoom Buttons
========================== */

zoomInBtn.addEventListener("click",()=>{

    scale += 0.25;

    scale = Math.min(scale,6);

    updateMap();

});

zoomOutBtn.addEventListener("click",()=>{

    const minScale =
        window.innerWidth <= 900 ? 0.45 : 1;

    scale -= 0.25;

    scale = Math.max(minScale,scale);

    updateMap();

});


const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){

    document.body.classList.add("dark-mode");

}

let infoVisible = false;

infoBtn.addEventListener("click",()=>{

    infoVisible = !infoVisible;

    mapInfo.classList.toggle("show",infoVisible);

});     


/* ==========================================
            Offline Detection
========================================== */

const offlinePopup =
document.getElementById("offlinePopup");

const offlineBtn =
document.getElementById("offlineBtn");

const retryBtn =
document.getElementById("retryBtn");

/* Show popup */

window.addEventListener("offline",()=>{

    offlinePopup.classList.add("show");

});

/* Hide if connection returns */

window.addEventListener("online",()=>{

    offlinePopup.classList.remove("show");

});

/* Continue Offline */

offlineBtn.addEventListener("click",()=>{

    offlinePopup.classList.remove("show");

});

/* Retry */

retryBtn.addEventListener("click",()=>{

    location.reload();

});
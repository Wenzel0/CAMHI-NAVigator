/* ==========================
   Dropdown
========================== */

const dropdown = document.querySelector(".dropdown");
const dropBtn = document.querySelector(".drop-btn");

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
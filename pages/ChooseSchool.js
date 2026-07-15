/* ===========================
   Dropdown
=========================== */

const dropdown = document.querySelector(".dropdown");
const dropBtn = document.querySelector(".drop-btn");

dropBtn.addEventListener("click",(e)=>{
    e.stopPropagation();
    dropdown.classList.toggle("active");
});

document.addEventListener("click",()=>{
    dropdown.classList.remove("active");
});

/* ===========================
   Page Transition
=========================== */

const loadingScreen =
document.getElementById("loadingScreen");

function goToPage(page){

    document.body.classList.add("transition");

    loadingScreen.classList.add("show");

    setTimeout(()=>{

        window.location.href = page;

    },500);

}

/* ===========================
   Campus Cards
=========================== */

document
.getElementById("mainCampus")
.addEventListener("click",()=>{

    goToPage("main/MainCampus.html");

});

document
.getElementById("libotonCampus")
.addEventListener("click",()=>{

    goToPage("liboton/LibotonCampus.html");

});

/* ===========================
   Dropdown Links
=========================== */

const menuLinks=document.querySelectorAll(".dropdown-menu a");

menuLinks[0].addEventListener("click",(e)=>{
    e.preventDefault();
    goToPage("main/MainCampus.html");
});

menuLinks[1].addEventListener("click",(e)=>{
    e.preventDefault();
    goToPage("liboton/LibotonCampus.html");
});

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){

    document.body.classList.add("dark-mode");

}


const loadingText =
document.getElementById("loadingText");

let dots = 1;

setInterval(()=>{

    loadingText.textContent =
    "Loading" + ".".repeat(dots);

    dots++;

    if(dots > 3){

        dots = 1;

    }

},400); 


window.addEventListener("load",()=>{

    loadingScreen.classList.remove("show");

});
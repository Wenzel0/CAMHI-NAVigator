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

function goToPage(page){

    document.body.classList.add("transition");

    setTimeout(()=>{
        window.location.href = page;
    },600);

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
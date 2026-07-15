/* ==========================================
            Loading Screen
========================================== */

const loadingScreen =
document.getElementById("loadingScreen");

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

/* Hide loader when page is ready */

window.addEventListener("load",()=>{

    loadingScreen.classList.remove("show");

});
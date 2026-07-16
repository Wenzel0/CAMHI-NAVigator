const dropdown = document.querySelector(".dropdown");
const button = document.querySelector(".drop-btn");

button.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("active");
});

document.addEventListener("click", () => {
    dropdown.classList.remove("active");
});

// ==========================================
// Get Started Transition
// ==========================================

const startBtn = document.getElementById("startBtn");
const loadingScreen = document.getElementById("loadingScreen");

startBtn.addEventListener("click", () => {

    document.body.classList.add("transition");

    loadingScreen.classList.add("show");

    setTimeout(() => {

        window.location.href = "pages/ChooseSchool.html";

    }, 500);

});

// ==========================================
// Transition for All Internal Links
// ==========================================

document.querySelectorAll("a[href]").forEach(link => {

    link.addEventListener("click", function(e){

        const href = this.getAttribute("href");

        // Ignore empty links, anchors, mail links, etc.
        if(
            !href ||
            href.startsWith("#") ||
            href.startsWith("http") ||
            href.startsWith("mailto:") ||
            href.startsWith("tel:")
        ){
            return;
        }

        e.preventDefault();

        document.body.classList.add("transition");

        loadingScreen.classList.add("show");

        setTimeout(() => {

            window.location.href = href;

        }, 500);

    });

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


if(!navigator.onLine){

    offlinePopup.classList.add("show");

}




/* ==========================================
        Network Status Notification
========================================== */

const networkToast =
document.getElementById("networkToast");


const networkTitle =
document.getElementById("networkTitle");

const networkMessage =
document.getElementById("networkMessage");

function showNetworkToast(){

    networkTitle.textContent =
    "Connected!";

networkMessage.textContent =
"Connected to Wi-Fi successfully.";

    networkToast.classList.add("show");

    setTimeout(()=>{

        networkToast.classList.remove("show");

    },5000);
    networkToast.addEventListener("click",()=>{

    networkToast.classList.remove("show");

});

let startX = 0;

networkToast.addEventListener("touchstart",(e)=>{

    startX = e.touches[0].clientX;

});

networkToast.addEventListener("touchmove",(e)=>{

    const moveX = e.touches[0].clientX;

    const diff = moveX - startX;

    if(diff > 60){

        networkToast.classList.remove("show");

    }

});

let mouseStart = 0;
let dragging = false;

networkToast.addEventListener("mousedown",(e)=>{

    dragging = true;

    mouseStart = e.clientX;

});

document.addEventListener("mouseup",()=>{

    dragging = false;

});

document.addEventListener("mousemove",(e)=>{

    if(!dragging) return;

    if(e.clientX - mouseStart > 80){

        networkToast.classList.remove("show");

        dragging = false;

    }

});
}



/* ---------- Connected ---------- */

window.addEventListener("online",()=>{

    showNetworkToast();

});

/* ---------- Offline ---------- */

window.addEventListener("offline",()=>{

    offlinePopup.classList.add("show");

}); 

window.addEventListener("load",()=>{

    if(navigator.onLine){

        setTimeout(()=>{

            showNetworkToast();

        },500);

    }

});
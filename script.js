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
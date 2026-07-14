const dropdown = document.querySelector(".dropdown");
const button = document.querySelector(".drop-btn");

button.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("active");
});

document.addEventListener("click", () => {
    dropdown.classList.remove("active");
});

// Get Started Transition

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    document.body.classList.add("fade-out");

    setTimeout(() => {

        window.location.href = "pages/ChooseSchool.html";

    }, 500);

});
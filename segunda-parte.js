document.addEventListener("DOMContentLoaded", function() {
    const flower = document.querySelector(".flower");
    const stem = document.querySelector(".stem");

    setTimeout(() => {
        flower.style.opacity = "1";
        stem.style.opacity = "1";
    }, 500);
});

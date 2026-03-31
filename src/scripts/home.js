import { bootSite } from "./site.js";

bootSite("home");

const rotatorImages = Array.from(document.querySelectorAll(".home-rotator-image"));

if (rotatorImages.length > 1) {
    let currentIndex = 0;

    window.setInterval(() => {
        rotatorImages[currentIndex].classList.remove("is-active");
        currentIndex = (currentIndex + 1) % rotatorImages.length;
        rotatorImages[currentIndex].classList.add("is-active");
    }, 3200);
}

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});

// const carousel = document.querySelector(".carousel");
// const slides = document.querySelectorAll(".slide");

// let currentIndex = 0;

// function showSlide(index) {
//     slides.forEach((slide, i) => {
//         slide.style.transform = `translateX(${(i - index) * 100}%)`;
//     });
// }

// function nextSlide() {
//     currentIndex = (currentIndex + 1) % slides.length;
//     showSlide(currentIndex);
// }

// setInterval(nextSlide, 1000); 
// showSlide(currentIndex);

const carousel = document.querySelector(".carousel");
const slidesContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");

let currentIndex = 0;

function showSlide(index) {
    slidesContainer.style.transform = `translateX(-${index * 20}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 1500); // Change slide every 5 seconds
showSlide(currentIndex);
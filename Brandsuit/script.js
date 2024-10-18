// Function to toggle the visibility of the mobile navigation menu
function toggleMenu() {
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}
let slideIndex = 0;
showSlides(slideIndex);

// Function to move slides
function moveSlide(n) {
    showSlides(slideIndex += n);
}

// Function to display the current slide
function showSlides(n) {
    const slides = document.getElementsByClassName("slide");

    // Handle edge cases (when reaching the end or beginning of the slide list)
    if (n >= slides.length) {
        slideIndex = 0; // Loop back to the first slide
    } else if (n < 0) {
        slideIndex = slides.length - 1; // Go to the last slide
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Display the current slide
    slides[slideIndex].style.display = "block";
}

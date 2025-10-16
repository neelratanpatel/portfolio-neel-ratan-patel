
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.querySelectorAll('[data-aos]').forEach((el) => observer.observe(el));



document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const allNavLinks = document.querySelectorAll('.nav-links li a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    allNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
});


let liked = false;
let likeCount = 12;
const likebtn = document.getElementById('likeButton')
const btn = document.getElementById('likeBtn');
const text = document.getElementById('likeText');

// Renders the button and text based on the variables
function render() {
    btn.textContent = liked ? '🩷' : '♡';
    btn.setAttribute('aria-pressed', liked);
    const label = likeCount === 1 ? 'like' : 'likes';
    text.textContent = `${likeCount} ${label}`;
}

// Add the event listener to the button
likebtn.addEventListener('click', () => {
    if (!liked) {
        liked = true;
        likeCount += 1;
    } else {
        liked = false;
        // Ensure count doesn't go below zero
        likeCount = Math.max(0, likeCount - 1);
    }
    // Call render to update the UI after a click
    render();
});

// Call render once at the beginning to set the initial state
render();

document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});

window.addEventListener('load', () => {
    const loader = document.getElementById('website-loader');
    
    // Set a minimum time (in milliseconds) for the loader to display.
    // 1500ms (1.5 seconds) is a common value to simulate a "significant" load.
    const minimum_delay_ms = 1500; 

    // The timer starts AFTER all page assets are loaded ('window.onload').
    setTimeout(() => {
        // 1. Hide the loader by adding the CSS class
        loader.classList.add('loader-hidden');

        // 2. OPTIONAL: Remove the loader from the DOM after the CSS transition finishes (0.5s)
        // This is good practice for performance and accessibility.
        setTimeout(() => {
            if (loader) {
                loader.remove();
            }
        }, 500); 

    }, minimum_delay_ms);
});

document.getElementById('viewPdfBtn').addEventListener('click', function() {
    const button = this;
    const container = document.getElementById('pdf-container');
    
    // 1. Toggle the 'show' class to start/reverse the CSS animation
    container.classList.toggle('show');

    // 2. Update the button text
    const isShowing = container.classList.contains('show');
    button.textContent = isShowing ? 'Hide Resume' : 'View Resume';

    // 3. Handle the smooth page scroll *after* the animation starts
    if (isShowing) {
        // Scroll the button itself into view to ensure the user sees the content
        // 'smooth' ensures the entire page scrolls smoothly
        button.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
    }
});
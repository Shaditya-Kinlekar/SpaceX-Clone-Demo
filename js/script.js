const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);

function navToggle() {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu');
}

function scrollPage() {
    const scrollPos = window.scrollY;

    if (scrollPos > 100 && !scrollStarted) {
        countUp();
        scrollStarted = true;
    } else if (scrollPos < 100 && scrollStarted) {
        reset();
        scrollStarted = false;
    }
}

function countUp() {
    counters.forEach((counters) => {
        counters.innerText = '0';

        const updateCounter = () => {
            // Get count target
            const target = +counters.getAttribute('data-target');
            // Get current counter value
            const c = +counters.innerText;

            // Create an increment
            const increment = target / 100;

            // If counter is less than target, add increment
            if (c < target) {
                // Round up & set the counter value
                counters.innerText = `${Math.ceil(c + increment)}`;
                setTimeout(updateCounter, 15);
            } else {
                counters.innerText = target;
            }
        };
        updateCounter();
    });
}

function reset() {
    counters.forEach((counters) => (counters.innerHTML = '0'));
}

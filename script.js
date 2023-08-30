
// Add active class to nav links on click
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        link.classList.add('active');
    });
});

// Fix header at the top on scroll
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});

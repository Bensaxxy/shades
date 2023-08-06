const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

// menuIcon.addEventListener('click', function(){
//       // If the navbar is open, close it.
//       if (navbar.style.display === "block") {
//         navbar.style.display = "none";
//         navbar.style.transition = '1s';
//       } else {
//         // Otherwise, open it.
//         navbar.style.display = "block";
//       }
// })


// scroll section
const section = document.querySelectorAll('section');
const navlinks = document.querySelectorAll('header .navbar a');

window.addEventListener('scroll', function () {
    let current = '';
    section.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= (sectionTop - sectionHeight / 2)) {
            current = section.getAttribute('id')
        }
    })
    navlinks.forEach(a => {
        a.classList.remove('active');
        if(a.classList.contains(current)){
            a.classList.add('active')
        }
    })
});

// scroll section
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: '2000',
    delay: '200'

});

ScrollReveal().reveal('header', { origin: 'top' });
ScrollReveal().reveal('p, .pricing-card', { origin: 'left' });
ScrollReveal().reveal('h1, .second-pricing-card', { origin: 'right' });
ScrollReveal().reveal('.main-hero-grid, .second-hero-p, input, .hero-section button, .social-icons', { origin: 'bottom' });
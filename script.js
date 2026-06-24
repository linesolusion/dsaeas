// INITIALIZATION FOR FULL-WIDTH HERO BANNER VIDIO PREMIUM STYLE
var heroSwiper = new Swiper(".heroSwiper", {
    effect: "slide",
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".hero-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

// 3D COVERFLOW SLIDER CONFIG
var swiper = new Swiper(".dubSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: { 
        rotate: 20, 
        stretch: 0, 
        depth: 150, 
        modifier: 1.2, 
        slideShadows: true 
    },
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    breakpoints: {
        768: {
            coverflowEffect: { depth: 100, modifier: 1.5 }
        }
    }
});

// SCROLL INTERSECTION OBSERVER ANIMATION
const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-up').forEach(el => {
    observer.observe(el);
});
// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#registration-url') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Testimonial Carousel
const track = document.getElementById('testimonialTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('carouselDots');

let currentIndex = 0;
let cards = [];
let cardWidth = 0;
let autoSlideInterval;

function updateCarousel() {
    if (!track || cards.length === 0) return;
    
    const containerWidth = track.parentElement.clientWidth;
    let cardsPerView = 3;
    
    if (containerWidth < 768) {
        cardsPerView = 1;
    } else if (containerWidth < 1024) {
        cardsPerView = 2;
    } else {
        cardsPerView = 3;
    }
    
    cardWidth = (containerWidth - (cardsPerView - 1) * 32) / cardsPerView;
    
    cards.forEach(card => {
        card.style.minWidth = `${cardWidth}px`;
    });
    
    const maxIndex = Math.max(0, cards.length - cardsPerView);
    currentIndex = Math.min(currentIndex, maxIndex);
    
    track.style.transform = `translateX(-${currentIndex * (cardWidth + 32)}px)`;
    updateDots(maxIndex + 1);
}

function updateDots(totalDots) {
    if (!dotsContainer) return;
    
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === currentIndex) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentIndex = i;
            updateCarousel();
            resetAutoSlide();
        });
        dotsContainer.appendChild(dot);
    }
}

function nextSlide() {
    const containerWidth = track.parentElement.clientWidth;
    let cardsPerView = 3;
    
    if (containerWidth < 768) {
        cardsPerView = 1;
    } else if (containerWidth < 1024) {
        cardsPerView = 2;
    }
    
    const maxIndex = Math.max(0, cards.length - cardsPerView);
    if (currentIndex < maxIndex) {
        currentIndex++;
        updateCarousel();
    }
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
}

function resetAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => {
            const containerWidth = track.parentElement.clientWidth;
            let cardsPerView = 3;
            
            if (containerWidth < 768) {
                cardsPerView = 1;
            } else if (containerWidth < 1024) {
                cardsPerView = 2;
            }
            
            const maxIndex = Math.max(0, cards.length - cardsPerView);
            if (currentIndex >= maxIndex) {
                currentIndex = 0;
                updateCarousel();
            } else {
                nextSlide();
            }
        }, 5000);
    }
}

// Initialize carousel
if (track) {
    cards = Array.from(track.children);
    
    if (cards.length > 0) {
        updateCarousel();
        
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetAutoSlide();
            });
            
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetAutoSlide();
            });
        }
        
        window.addEventListener('resize', () => {
            updateCarousel();
        });
        
        // Auto slide
        autoSlideInterval = setInterval(() => {
            const containerWidth = track.parentElement.clientWidth;
            let cardsPerView = 3;
            
            if (containerWidth < 768) {
                cardsPerView = 1;
            } else if (containerWidth < 1024) {
                cardsPerView = 2;
            }
            
            const maxIndex = Math.max(0, cards.length - cardsPerView);
            if (currentIndex >= maxIndex) {
                currentIndex = 0;
                updateCarousel();
            } else {
                nextSlide();
            }
        }, 5000);
    }
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-up, .fade-up-delay, .fade-up-delay-1, .fade-up-delay-2, .fade-up-delay-3').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    observer.observe(el);
});

// CTA button registration URL handler
const registrationUrl = 'https://www.eternityready.com/signup'; // Update with your actual signup URL

document.querySelectorAll('a[href="#registration-url"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = registrationUrl;
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Console log for debugging
console.log('Eternity Ready Premium Landing Page Loaded ✨');
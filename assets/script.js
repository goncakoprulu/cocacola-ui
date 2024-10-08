document.addEventListener('DOMContentLoaded', function() {

    const indicators = document.querySelectorAll('.carousel-indicators span');
    const slides = document.querySelectorAll('.carousel-slide');
    
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            indicators[i].classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
                indicators[i].classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    indicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            currentIndex = slideIndex;
            showSlide(slideIndex);
        });
    });

    showSlide(currentIndex);
    setInterval(nextSlide, 4000);
});

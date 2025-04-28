$(document).ready(function() {
    let currentSlide = 0;
    const slides = $(".slide");
    const thumbs = $(".thumbnails img");

    // Show slide by index
    function showSlide(index) {
        slides.removeClass("active");
        slides.eq(index).addClass("active");
        
        thumbs.removeClass("active");
        thumbs.eq(index).addClass("active");
        currentSlide = index;
    }

    // Thumbnail click event
    thumbs.click(function() {
        showSlide($(this).data("target"));
    });

    // Next/previous buttons
    $(".next").click(function() {
        showSlide((currentSlide + 1) % slides.length);
    });

    $(".prev").click(function() {
        showSlide((currentSlide - 1 + slides.length) % slides.length);
    });

    // Auto-advance every 5 seconds
    setInterval(() => {
        showSlide((currentSlide + 1) % slides.length);
    }, 5000);
    
});

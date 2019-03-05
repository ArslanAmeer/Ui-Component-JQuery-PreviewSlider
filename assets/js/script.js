//  Image Slider With Thumbnail Initialization

$(document).ready(function () {
    $('#lightSlider').lightSlider({
        gallery: true, // Show Thumbnails Panel
        item: 1, // Items or Images in Main Display Are. (Suitable for Content Slider)
        loop: true, // Repeat Images
        slideMargin: 1, // Spaces Between Main Slides Images
        thumbItem: 4, // Number Of Thumbnails to show on THumbnail Panel
        speed: 800, // Image Change : Slider Speed in Miliseconds ms 
        auto: false, // Auto play Slideshow On
        pause: 5000 // Pause Between Each Slide Change
    });
});
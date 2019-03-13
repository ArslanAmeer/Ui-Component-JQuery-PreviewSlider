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

$('li>img')
    .wrap('<span style="display:inline-block"></span>')
    .css('display', 'block')
    .parent()
    .zoom({
        magnify: 1.3
    });
// To use zoom with img elements, they will need to be wrapped with another element.
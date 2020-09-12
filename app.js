var myCarousel = document.querySelector('#carouselBootstrap5')
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 3000,
    wrap: true
})

jQuery(function () {
    jQuery('[data-toggle="popover"]').popover()
})
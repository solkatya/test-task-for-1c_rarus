const $jsCarousel = $('.js-carousel');
if ($jsCarousel.length > 0) {
    ((_root) => {
        const self = {
            carousel: _root.find('.owl-carousel'),
        };

        self.carousel.owlCarousel({
            nav: true,
            dots: false,
            
            center: false,
            autoWidth: true, 
            margin: 20, 
            items: 1, 

            responsive: {
                0: {
                    items: 3,
                },
                760: {
                    items: 5,
                },
                1200: {
                    items: 8, 
                },
            },
        });
    })($jsCarousel);
}

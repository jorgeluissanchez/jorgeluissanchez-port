$(document).ready(function() {

    $('.carousel').carousel({
        interval: 2000,
        wrap: true
    })
    $('.carousel').on('touchstart', function(e) {
        const C = e.originalEvent.touches[0].pageX;
        $(this).one('touchmove', function(e) {
            const M = e.originalEvent.touches[0].pageX;
            const S = 5;

            if (Math.floor(C - M) > S) {
                $(this).carousel('next');
            } else if (Math.floor(C - M) < -S) {
                $(this).carousel('prev');
            }
        });
        $(this).on('touchend', function() {
            $(this).off('touchmove');
        });
    });
});
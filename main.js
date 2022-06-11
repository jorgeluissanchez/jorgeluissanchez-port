document.addEventListener('DOMContentLoaded', () => {
    var elemsC = document.querySelectorAll('.carousel');
    var instancesC = M.Carousel.init(elemsC, {
        padding: 10,
        noWrap: false,
    });
});
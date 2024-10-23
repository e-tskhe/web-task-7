// Функция внутри $( document ).ready() срабатывает после загрузки DOM.
$(document).ready(function() {
    $('.slider').slick({
        dots:true,
        adaptiveHeight:true,
        slidesToShow:3,
        speed:200,
        touchThreshold:10,
        waitForAnimate:false,
        responsive:[{
            breakpoint: 768,
            settings: {
                slidesToShow:1,
            }
        }]
    });
}); 
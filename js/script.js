// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    if (st > lastScrollTop && st > navbarHeight){
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

$(document).ready(function(){
    $("#top").on("click","a", function (event) {
        if(this !== document.querySelector('a.toPrice') && this !== document.querySelector('a.toPrice2') && this !== document.querySelector('a.toPrice3') && this !== document.querySelector('a.toPrice4') && this !== document.querySelector('a.toPrice5') && this !== document.querySelector('a.toPrice6') && this !== document.querySelector('a.toPrice7')  && this !== document.querySelector('a.toPrice8')) {
            if(this !== document.querySelector('a[href="trainee-1.html"]') && this !== document.querySelector('a[href="trainee-2.html"]')) {
            console.log(this);
            if (this !== document.querySelector('a[href="tel:+375296809343"]')) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top-60}, 500);
    }}
}
    });
});

$(document).ready(function(){
    $("#footer").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href

        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            footer = $(id).offset().footer;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: footer}, 2000);
    });
});

function initMap() {
  var uluru = {lat: 53.9063639, lng: 27.53076199999998};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
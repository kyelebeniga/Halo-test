//Animates the counters in the hero section

let counters = document.querySelectorAll("#found");
let speed = 5;

counters.forEach(counters =>{
    let endValue = parseInt(counters.getAttribute("data-target"));
    let startValue = 0
    console.log(endValue);
    let duration = Math.floor(speed / endValue);
    let counter = setInterval(function(){
        startValue += 1;
        counters.textContent = startValue;
        if (startValue == endValue){
            clearInterval(counter);
        }
    }, duration);
});

let activated = document.querySelectorAll("#activated");
let speed2 = 2000;

activated.forEach(activated =>{
    let endValue = parseInt(activated.getAttribute("data-target"));
    let startValue = 0
    console.log(endValue);
    let duration = Math.floor(speed2 / endValue);
    let counter = setInterval(function(){
        startValue += 1;
        activated.textContent = startValue;
        if (startValue == endValue){
            clearInterval(counter);
        }
    }, duration);
});

//Navbar
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

//Career Carousel
$('.carousel').slick({ 
    arrows: true,
    dots: false,
    infinite: false,
    prevArrow: '<button class="prev-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow: '<button class="next-arrow"><i class="fa-solid fa-chevron-right"></i></button>'
});
$('.carousel .prev-arrow').hide();
$('.carousel').on('afterChange', function(){
    console.log($('.carousel').slick('slickCurrentSlide'));
    var currentSlide = $('.carousel').slick('slickCurrentSlide');
if(currentSlide==0){
    $('.carousel .prev-arrow').hide();
    $('.carousel .next-arrow').show();
}
if(currentSlide==1){
    $('.carousel .prev-arrow').show();
    $('.carousel .next-arrow').hide();
}
});

//News Carousel
$('.news-carousel').slick({ 
    arrows: true,
    dots: false,
    infinite: false,
    prevArrow: '<button class="prev-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow: '<button class="next-arrow"><i class="fa-solid fa-chevron-right"></i></button>'
});
$('.news-carousel .prev-arrow').hide();
$('.news-carousel').on('afterChange', function(){
    console.log($('.news-carousel').slick('slickCurrentSlide'));
    var currentSlide = $('.news-carousel').slick('slickCurrentSlide');
if(currentSlide==0){
    $('.news-carousel .prev-arrow').hide();
    $('.news-carousel .next-arrow').show();
}
if(currentSlide==1){
    $('.news-carousel .prev-arrow').show();
    $('.news-carousel .next-arrow').hide();
}
});
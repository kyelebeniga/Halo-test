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
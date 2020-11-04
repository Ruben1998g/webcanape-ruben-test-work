$(document).ready(function(){
 $('.owl-carousel-1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        768:{
            items:3
        },
        1200:{
            items:4
        }
    }
});

  $('.owl-carousel-2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        768:{
            items:3
        },
        1200:{
            items:5
        }
    }
});

let overFlow = document.querySelector('.show');
let preLoader = document.querySelector('.overflow');
let main = document.querySelector('.l_main');

setTimeout(function(){
    overFlow.classList.add('hidden-laoder');
    main.classList.add('adios');
    setTimeout(function(){
        overFlow.classList.add('hidden');
    },2000);
    preLoader.classList.remove('overflow');
},2000);


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


function topFunction() {
 
    let interval = setInterval(function(){
        if(document.body.scrollTop>20 || document.documentElement.scrollTop>20){
            document.documentElement.scrollTop = document.documentElement.scrollTop - 20;
             document.body.scrollTop =  document.body.scrollTop - 20;
        }else{
            clearInterval(interval);
        }
    },5);
}

let top = document.querySelector('#myBtn');

top.addEventListener("click",function(){
    topFunction();
});

let mapOpen = document.querySelector('.info-menu__a');
let map = document.querySelector('.map__wrap');
let mapClose = document.querySelector('.map__wrap');
let mapCloseTwo = document.querySelector('.map__close');

mapOpen.addEventListener("click", function(){
    map.classList.add('show');
    preLoader.classList.add('overflow');
});

mapClose.addEventListener("click", function(){
    map.classList.remove('show');
    preLoader.classList.remove('overflow');
});

mapCloseTwo.addEventListener("click", function(){
    map.classList.remove('show');
    preLoader.classList.remove('overflow');
});


});


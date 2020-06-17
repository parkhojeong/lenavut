var slideIndex = 0;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

function init_index(){
    slideIndex = 0;
}

function plusSlide() {
    slideIndex ++;
    showSlides(slideIndex);
}
function minusSlide() {
    slideIndex --;
    showSlides(slideIndex);
}

function currentSlide() {
    showSlides(slideIndex);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
  
    /* asign 1~length */ 
    if (n > slides.length-1) {slideIndex = 0}    
    else if (n < 0) {
        slideIndex = slides.length-1
    }else{
         slideIndex = n;
    }

    /* initialize display*/
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
   
        console.dir(slides[i].children[0]);
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
  
    /* assign display*/

    
    slides[slideIndex].style.display = "block";  
    dots[slideIndex].className += " active";
    
}

function init(){
    
}

init();
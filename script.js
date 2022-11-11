console.log("Hello, how are you")

let slideindex = 1;
showSlides(slideindex)


function plusSlides(n) {
    showSlides(slideindex += n);
}

function currentSlide(n) {
    showSlides(slideindex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("myslides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideindex = 1;
    }
    if (n < 1) {
        slideindex = slides.length;
    }

    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "" )
    }

    slides[slideindex - 1].style.display = "block";
    dots[slideindex - 1].className += " active";
}


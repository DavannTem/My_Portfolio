var slideIndex = 0;
var continuer = true;
first=true;
showSlides();


  
  function currentSlide(n) {
    continuer= false;
    first= true;
    slideIndex = n-1;
    showSlides();
  }


function showSlides() {
    if(continuer || first){
        first=false;
        var i;
        var slides = document.getElementsByClassName("Slide");
        var dots = document.getElementsByClassName("dot");
        var background= "";
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
        }

        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1} 
        for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 4400); // Change image every 1 seconds
        } else {
            continuer = true;
            return null;
        }
  }
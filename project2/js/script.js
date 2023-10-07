




window.addEventListener("DOMContentLoaded", function() {
  var dropdowns = document.getElementsByClassName("dropdown");

  for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener("mouseover", function() {
      this.getElementsByClassName("dropdown-content")[0].style.display = "block";
    });

    dropdowns[i].addEventListener("mouseout", function() {
      this.getElementsByClassName("dropdown-content")[0].style.display = "none";
    });
  }
});

















// --------------------------------------slider-----------------------------------------------

let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}



function currentSlide(n) {
  showSlides(slideIndex = n);
}



function showSlides(n) {
  
  let i;
  let slides = document.getElementsByClassName("slide1_img");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) 
  {
    slideIndex = 1
  }

  if (n < 1) 
  {
    slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



// auto
let slideIndex2 = 0;
showSlides1();

function showSlides1() {
  let i;
  let slides = document.getElementsByClassName("slide1_img");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex2++;
  if (slideIndex2 > slides.length) {slideIndex2 = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2-1].style.display = "block";  
  dots[slideIndex2-1].className += " active";
  setTimeout(showSlides1, 5000); // Change image every 2 seconds
}












// -------------------------------------------------------modal open-----------------------------------------------------------------





function onClick(element){
  document.getElementById("img01").src = element.src;
  document.getElementById("myModal").style.display = "block";
}








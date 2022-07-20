let slideIndex = 0
let slides = document.getElementsByClassName('slide');
let thumbs = document.getElementsByClassName('slide-thumb');
showSlides(0)

function next() {
  showSlides(slideIndex + 1)
}

function back() {
  showSlides(slideIndex - 1)
}

function showSlides(n) {
  slideIndex = n;

  if (slideIndex < 0) {
    slideIndex = slides.length - 1
  } else if (slideIndex >= slides.length) {
     slideIndex = 0
   }

   console.log(slideIndex)


  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
    thumbs[i].classList.remove('active')
  }

  slides[slideIndex].style.display = "flex"
  thumbs[slideIndex].classList.add('active')
  document.getElementById('carousel-section').scrollIntoView({
    behavior: 'smooth', block: 'nearest'
  });
}

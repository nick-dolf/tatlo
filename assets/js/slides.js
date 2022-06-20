let slideIndex = 0
let slides = document.getElementsByClassName('slide');
let thumbs = document.getElementsByClassName('slide-thumb');
showSlides(0)

function next() {
  slideIndex += 1
  if (slideIndex >= slides.length) {
     slideIndex = 0
   }
  showSlides(slideIndex)
}

function back() {
  slideIndex -= 1
  if (slideIndex < 0) {
    slideIndex = slides.length - 1
  }
  showSlides(slideIndex)
}

function showSlides(n) {
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
    thumbs[i].classList.remove('active')
  }

  slides[n].style.display = "flex"
  thumbs[n].classList.add('active')
}

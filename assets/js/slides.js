let slideIndex = 0
showSlides(slideIndex)

function next() {
  slideIndex += 1
  showSlides(slideIndex)
}

function back() {
  slideIndex -= 1
  showSlides(slideIndex)
}

function showSlides(n) {
  let slides = document.getElementsByClassName('slide__image');

  if (slideIndex < 0) {
    slideIndex = slides.length - 1
  } else if (slideIndex >= slides.length) {
    slideIndex = 0
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }

  slides[slideIndex].style.display = "block"
}

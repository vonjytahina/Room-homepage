const hamburger = document.querySelector('.hamburger')
const closeBtn = document.querySelector('.close')
const mobileMenu = document.querySelector('.mobile-menu')
const vignette = document.querySelector('.vignette')

const arrowLeft = document.querySelector('.arrows .arrow-left');
const arrowRight = document.querySelector('.arrows .arrow-right');
const mobileArrowLeft = document.querySelector('.mobile-arrows .arrow-left');
const mobileArrowRight = document.querySelector('.mobile-arrows .arrow-right');
const section1Left = document.querySelector('.container .section-1 .section-1-left');
const title = document.querySelector('.title');
const content = document.querySelector('.content');

const states = {
  one: {
    image: "images/desktop-image-hero-1.jpg",
    title: "Discover innovative ways to decorate",
    content: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
  },
  two: {
    image: "images/desktop-image-hero-2.jpg",
    title: "We are available all across the globe",
    content: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
  },
  three: {
    image: "images/desktop-image-hero-3.jpg",
    title: "Manufactured with the best materials",
    content: "Our modern furniture store provides a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
  }
};

let currentState = 'one';

arrowLeft.addEventListener('click', () => {
  if (currentState === 'one') {
    currentState = 'two';
  } else if (currentState === 'two') {
    currentState = 'three';
  } else if (currentState === 'three') {
    currentState = 'one';
  }

  section1Left.style.backgroundImage = `url('${states[currentState].image}')`;
  title.textContent = states[currentState].title;
  content.textContent = states[currentState].content;
});

arrowRight.addEventListener('click', () => {
  if (currentState === 'one') {
    currentState = 'three';
  } else if (currentState === 'two') {
    currentState = 'one';
  } else if (currentState === 'three') {
    currentState = 'two';
  }

  section1Left.style.backgroundImage = `url('${states[currentState].image}')`;
  title.textContent = states[currentState].title;
  content.textContent = states[currentState].content;
});

mobileArrowLeft.addEventListener('click', () => {
  if (currentState === 'one') {
    currentState = 'two';
  } else if (currentState === 'two') {
    currentState = 'three';
  } else if (currentState === 'three') {
    currentState = 'one';
  }

  section1Left.style.backgroundImage = `url('${states[currentState].image}')`;
  title.textContent = states[currentState].title;
  content.textContent = states[currentState].content;
});

mobileArrowRight.addEventListener('click', () => {
  if (currentState === 'one') {
    currentState = 'three';
  } else if (currentState === 'two') {
    currentState = 'one';
  } else if (currentState === 'three') {
    currentState = 'two';
  }

  section1Left.style.backgroundImage = `url('${states[currentState].image}')`;
  title.textContent = states[currentState].title;
  content.textContent = states[currentState].content;
});

hamburger.onclick = () => {
  if(!mobileMenu.classList.contains('show-mobile-menu')) {
    mobileMenu.classList.add('show-mobile-menu')
    mobileMenu.classList.remove('hide-mobile-menu')
    vignette.style.display = "block"
  }
}

closeBtn.onclick = () => {
  if(!mobileMenu.classList.contains('hide-mobile-menu')) {
    mobileMenu.classList.add('hide-mobile-menu')
    mobileMenu.classList.remove('show-mobile-menu')
    vignette.style.display = "none"
  }
}

function windowResize() {
  if (document.documentElement.clientWidth > 375) {
    hamburger.style.display = "none";
    vignette.style.display = "none"
    mobileMenu.classList.remove("hide-mobile-menu");
    mobileMenu.classList.remove("show-mobile-menu");
  } else if (document.documentElement.clientWidth <= 375) {
    hamburger.style.display = "block";
    vignette.style.display = "none"
    mobileMenu.classList.remove("hide-mobile-menu");
    mobileMenu.classList.remove("show-mobile-menu");
  }
}

window.addEventListener("resize", windowResize);

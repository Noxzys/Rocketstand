window.addEventListener("scroll", onScroll);

onScroll();

function onScroll() {
  showBackToTopButtonOnScroll();
  showNavOnScroll();
}

function showNavOnScroll() {
  let nav = document.getElementById("navigation");

  if (scrollY === 0) {
    nav.classList.remove("scroll");
  } else {
    nav.classList.add("scroll");
  }
}

function showBackToTopButtonOnScroll() {
  let nav = document.getElementById("backToTopButton");

  if (scrollY < 550) {
    backToTopButton.classList.add("scroll");
  } else {
    backToTopButton.classList.remove("scroll");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card,
#price,
#price header,
#price .content`);



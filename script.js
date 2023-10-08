const openNav = document.getElementById('open-nav');
const closeNav = document.getElementById('close-nav');
const nav = document.getElementById('nav');
const links = document.querySelectorAll('#link')


function closeNavMenu() {
  nav.classList.remove('active')
}

links.forEach(link =>{
 link.addEventListener('click' , ()=>{
 closeNavMenu()
 })
})


openNav.addEventListener('click', ()=>{
  nav.classList.add('active')
});

closeNav.addEventListener('click', ()=>{
 closeNavMenu()
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    969: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

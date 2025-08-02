const tl = gsap.timeline({defaults: {ease:'power2.out'}});

tl.to(".slider", {y: "-100%", duration: 1.3});
tl.to(".intro .hero", {y: "0%", duration: 1.3});
tl.to(".socials", {y: "0%", duration: 1.3});
tl.fromTo(".na11", {opacity: 0}, {opacity:1, duration: 1.3});



const bar = document.getElementById('bar');
const close = document.getElementById('close');
const navbar = document.getElementById('navbar');


if (bar) {
    bar.addEventListener('click', () => {
        navbar.classList.toggle('active');

    })
}

if (close) {
    close.addEventListener('click', () => {
        navbar.classList.remove('active');
    })
}

// Add event listener to each menu item to close the menu after click
const menuItems = document.querySelectorAll('#navbar li a');
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});


/* 

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const navbar = document.getElementById('navbar');

bar.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

close.addEventListener('click', () => {
  navbar.classList.remove('active');
});

// Add event listener to each menu item to close the menu after click
const menuItems = document.querySelectorAll('#navbar li a');
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});
*/
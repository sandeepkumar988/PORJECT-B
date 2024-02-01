
// For navbar responsive (toggle button action)
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let body = document.querySelector('body');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    // body.classList.toggle("no-scroll");
}
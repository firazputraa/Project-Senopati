// hamburger line
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Script to handle dropdown visibility on click
const aboutButton = document.getElementById('about-button');
const aboutDropdown = document.getElementById('about-dropdown');
 aboutButton.addEventListener('click', () => {
     // Toggle dropdown visibility
     aboutDropdown.classList.toggle('hidden');
 });
 // Close dropdown when clicking outside
 window.addEventListener('click', (event) => {
     if (!aboutButton.contains(event.target) && !aboutDropdown.contains(event.target)) {
         aboutDropdown.classList.add('hidden');
     }
 });



// navbarfixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
};
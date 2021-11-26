document.addEventListener('DOMContentLoaded', function() {

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-bar-list");
    const navLink = document.querySelectorAll(".nav-bar-item");
    
    hamburger.addEventListener("click", mobileMenu);
    navLink.forEach(n => n.addEventListener("click", closeMenu));
    
    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }
    
    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    
    
    
    
    })
    window.onscroll = function() 
    {myFunction()};
    var navbar = document.getElementById("navbar")
    var sticky =navbar.offsetTop;
    
    function myFunction() {
        if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky")
        } else {
          navbar.classList.remove("sticky");
        }
      }
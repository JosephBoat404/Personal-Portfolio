window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar.bg-dark');
    if (window.scrollY > 0) {
        navbar.style.cssText = 'background: #000000 !important;';
    } else {
      navbar.style.cssText= 'background: none !important;';
    }
});

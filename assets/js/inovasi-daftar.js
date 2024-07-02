document.getElementById('menu-icon').addEventListener('click', function () {
    var navLinks = document.getElementById('nav-links');
    if (navLinks.style.display === 'block') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'block';
    }
});

window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
        document.getElementById('nav-links').style.display = 'flex';
    } else {
        document.getElementById('nav-links').style.display = 'none';
    }
});
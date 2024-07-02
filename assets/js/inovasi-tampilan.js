function showForm() {
    document.getElementById("form-container").style.display = "block";
}

function hideForm() {
    document.getElementById("form-container").style.display = "none";
}

document.getElementById('menu-icon').onclick = function () {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
};


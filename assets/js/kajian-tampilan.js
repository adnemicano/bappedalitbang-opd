function showForm2() {
    document.getElementById("form-container").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
    var downloadIcons = document.querySelectorAll(".table-container .kanan img");
    downloadIcons.forEach(function (icon) {
        icon.addEventListener("click", function () {
            document.getElementById("upload-form-container").style.display = "block";
        });
    });

    // Close form when clicking outside
    window.onclick = function (event) {
        var formContainer = document.getElementById("upload-form-container");
        if (event.target == formContainer) {
            formContainer.style.display = "none";
        }
    }
});

document.getElementById('menu-icon').onclick = function () {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
};


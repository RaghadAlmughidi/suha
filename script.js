
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
});


document.getElementById('fileInput').addEventListener('change', function() {
    let fileNameDisplay = document.getElementById('file-name');
    if (this.files.length > 0) {
        fileNameDisplay.textContent = `Selected file: ${this.files[0].name}`;
    } else {
        fileNameDisplay.textContent = "";
    }
});




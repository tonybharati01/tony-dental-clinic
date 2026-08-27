const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});

// =========================
// OUR TEAM
// =========================

const profileButtons = document.querySelectorAll(".doctor-link");

profileButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.preventDefault();

        const doctorName =
            this.closest(".doctor-info").querySelector("h3").textContent;

        alert("Doctor profile: " + doctorName);

    });

});
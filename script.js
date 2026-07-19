// ===========================================
// MBSC Solutions - script.js
// ===========================================

// Counter Animation Function
function animateCounter(id, target, speed) {

    let count = 0;
    const element = document.getElementById(id);

    // Element lekapothe error raakunda
    if (!element) return;

    const increment = Math.ceil(target / speed);

    const timer = setInterval(() => {

        count += increment;

        if (count >= target) {
            count = target;
            clearInterval(timer);
        }

        element.textContent = count + "+";

    }, 20);

}

// Page Load ayyaka run avutundi
window.addEventListener("load", function () {

    animateCounter("clients", 1250, 100);
    animateCounter("gst", 520, 80);
    animateCounter("itr", 890, 90);

});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// Current Year in Footer (Optional)
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}
// Mobile Menu

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (menuToggle && menu) {

    menuToggle.addEventListener("click", function () {

        menu.classList.toggle("active");

    });

}
// ===============================
// Back To Top Button
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
// ===============================
// PRELOADER
// ===============================

window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    if (preloader) {

        setTimeout(function () {

            preloader.style.display = "none";

        }, 1000);

    }

});

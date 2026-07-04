/* ==========================================
   PORTFOLIO SCRIPT
   Leon Maina
========================================== */

/* =========================
   Typing Animation
========================= */

const typing = document.getElementById("typing");

if (typing) {

    const words = [
        "Software Developer",
        "Full-Stack Developer",
        "Java Programmer",
        "Web Developer",
        "UI/UX Enthusiast",
        "Founder of Lee Creatives"
    ];

    let wordIndex = 0;
    let letterIndex = 0;
    let deleting = false;

    function type() {

        const word = words[wordIndex];

        if (!deleting) {

            typing.textContent = word.substring(0, letterIndex++);

        } else {

            typing.textContent = word.substring(0, letterIndex--);

        }

        let speed = deleting ? 60 : 120;

        if (!deleting && letterIndex > word.length) {

            deleting = true;
            speed = 1500;

        }

        if (deleting && letterIndex < 0) {

            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;

        }

        setTimeout(type, speed);

    }

    type();

}

/* =========================
   Progress Bar
========================= */

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    if (!progressBar) return;

    const scrollTop = document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    progressBar.style.width = (scrollTop / height) * 100 + "%";

});

/* =========================
   Active Navigation
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (window.scrollY >= top) {

            current = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* =========================
   Mobile Menu
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

        });

    });

}

/* =========================
   Scroll To Top
========================= */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 500) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}
/* =========================
   Theme Toggle
========================= */

const themeToggle = document.querySelector(".theme-toggle");

if (themeToggle) {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
            localStorage.setItem("theme", "light");

        } else {

            themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
            localStorage.setItem("theme", "dark");

        }

    });

}

/* =========================
   Skills Progress Animation
========================= */

const progressBars = document.querySelectorAll(".progress");

if (progressBars.length > 0) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const bar = entry.target;

                if (bar.classList.contains("html")) bar.style.width = "95%";
                else if (bar.classList.contains("css")) bar.style.width = "90%";
                else if (bar.classList.contains("js")) bar.style.width = "85%";
                else if (bar.classList.contains("java")) bar.style.width = "80%";
                else if (bar.classList.contains("python")) bar.style.width = "75%";
                else bar.style.width = "70%";

            }

        });

    }, { threshold: 0.5 });

    progressBars.forEach(bar => observer.observe(bar));

}

/* =========================
   AOS Animation
========================= */

if (typeof AOS !== "undefined") {

    AOS.init({
        duration: 1000,
        once: true
    });

}

/* =========================
   tsParticles
========================= */

if (typeof tsParticles !== "undefined") {

    tsParticles.load("particles", {
        particles: {
            number: {
                value: 40
            },
            color: {
                value: "#38BDF8"
            },
            links: {
                enable: true,
                color: "#38BDF8"
            },
            move: {
                enable: true,
                speed: 2
            }
        }
    });

}

/* =========================
   Loading Screen
========================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.classList.add("hide");

        }, 2000);

    }

});

console.log("✅ Portfolio script loaded successfully.");
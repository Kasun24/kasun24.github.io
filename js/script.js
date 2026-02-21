document.addEventListener("DOMContentLoaded", () => {
    // Theme Toggle Logic
    const toggleBtn = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    
    // Check local storage or system preference
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const currentTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
    
    document.documentElement.setAttribute("data-theme", currentTheme);
    updateIcon(currentTheme);
    
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            let theme = document.documentElement.getAttribute("data-theme");
            let newTheme = theme === "dark" ? "light" : "dark";
            
            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);
            updateIcon(newTheme);
        });
    }

    function updateIcon(theme) {
        if (!themeIcon) return;
        if (theme === "dark") {
            themeIcon.className = "fa-solid fa-sun"; // Show sun to toggle to light
        } else {
            themeIcon.className = "fa-solid fa-moon"; // Show moon to toggle to dark
        }
    }

    // Typed.js Initialization
    const typedElement = document.querySelector('.typed');
    if (typedElement && window.Typed) {
        new Typed('.typed', {
            strings: ["Senior Software Engineer", "Full Stack Developer", "Cybersecurity Enthusiast"],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1500,
            loop: true
        });
    }

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // If mobile menu is open, close it (Bootstrap 5)
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        });
    });

    // Active link highlighting on scroll
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
});

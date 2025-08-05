document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav-links");

    if (menuToggle && nav) {
        console.log("Menu toggle found, adding event listener.");
        
        menuToggle.addEventListener("click", function () {
            console.log("Hamburger menu clicked!");
            nav.classList.toggle("nav-active");
            console.log("Current nav classList:", nav.classList);
        });

        // 👇 Auto-close menu when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav-active');
            });
        });
    } else {
        console.error("Error: menu-toggle or nav-links not found in DOM.");
    }

    // Update the footer year automatically
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    } else {
        console.error("Error: #year element not found in DOM.");
    }

  // Optional: smooth scroll behavior fallback for older browsers
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth"
        });
      }
    });
  });

      const logo = document.querySelector(".logo");
    if (logo) {
        let lastIsMobile = window.innerWidth <= 1000;

        window.addEventListener("resize", () => {
            const isMobile = window.innerWidth <= 1000;

            if (isMobile !== lastIsMobile) {
                logo.style.opacity = 0;
                setTimeout(() => {
                    logo.src = isMobile
                      ? "/images/global/bt-logo_small.webp"
                      : "/images/global/bespoketone-logo.webp";
                    logo.onload = () => {
                        logo.style.opacity = 1;
                    };
                }, 150);

                lastIsMobile = isMobile;
            }
        });
    } else {
        console.error("Error: .logo image not found in DOM.");
    }
});

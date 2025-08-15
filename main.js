document.addEventListener("DOMContentLoaded", function () {
  // GSAP & ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    ".hero-content",
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 1.2, ease: "power2.out", delay: 0.2 }
  );
  gsap.fromTo(
    ".hero-image",
    { opacity: 0, scale: 0.95 },
    { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out", delay: 0.5 }
  );

  gsap.utils.toArray(".section-title").forEach((title) => {
    gsap.fromTo(
      title,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  gsap.utils.toArray(".feature-card").forEach((card, i) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: i * 0.15,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  gsap.utils.toArray(".screenshot-card").forEach((card, i) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay: i * 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  gsap.utils.toArray(".db-card").forEach((card, i) => {
    gsap.fromTo(
      card,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        delay: i * 0.1,
        ease: "back.out(1.3)",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  gsap.utils.toArray(".platform").forEach((platform, i) => {
    gsap.fromTo(
      platform,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: i * 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: platform,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // About section animation
  const aboutSection = document.querySelector(".about-tabular");
  if (aboutSection) {
    const aboutElements = [
      aboutSection.querySelector(".logo"),
      aboutSection.querySelector("h2"),
      aboutSection.querySelector("p"),
      aboutSection.querySelector(".version-info"),
      aboutSection.querySelector(".github-link"),
      aboutSection.querySelector(".credit"),
      aboutSection.querySelector(".copyright"),
    ];

    gsap.fromTo(
      aboutSection,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: aboutSection,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    aboutElements.forEach((element, i) => {
      if (element) {
        gsap.fromTo(
          element,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: aboutSection,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }

  // Toggle Menu Burger
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("open");
  });

  // Close menu on link click (mobile)
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        navMenu.classList.remove("active");
        menuToggle.classList.remove("open");
      }
    });
  });

  // Close menu on click outside (mobile)
  document.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove("active");
        menuToggle.classList.remove("open");
      }
    }
  });

  // Close menu on resize to desktop
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      navMenu.classList.remove("active");
      menuToggle.classList.remove("open");
    }
  });
  // ...existing code...

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 90,
          behavior: "smooth",
        });
        navMenu.classList.remove("active");
        const spans = menuToggle.querySelectorAll("span");
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      }
    });
  });

  // Parallax untuk shape
  document.addEventListener("mousemove", (e) => {
    const shapes = document.querySelectorAll(".shape");
    shapes.forEach((shape) => {
      const rect = shape.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = ((e.clientX - centerX) / window.innerWidth) * 10;
      const y = ((e.clientY - centerY) / window.innerHeight) * 10;
      shape.style.transform = `translate(${x}px, ${y}px)`;
    });
  });

  // VanillaTilt untuk db-card
  if (window.VanillaTilt) {
    VanillaTilt.init(document.querySelectorAll(".db-card"), {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
    });
  }

  // Lightbox
  window.openLightbox = function (src) {
    const lightbox = document.getElementById("lightbox");
    if (lightbox) {
      lightbox.querySelector("img").src = src;
      lightbox.classList.add("active");
    }
  };
  window.closeLightbox = function () {
    const lightbox = document.getElementById("lightbox");
    if (lightbox) {
      lightbox.classList.remove("active");
    }
  };

  // Particles.js
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#e74c3c" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#e74c3c",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          out_mode: "out",
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 140, line_linked: { opacity: 1 } },
          push: { particles_nb: 4 },
        },
      },
      retina_detect: true,
    });
  }
});

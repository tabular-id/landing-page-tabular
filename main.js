document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to("#heroTitle", {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power3.out",
  });

  gsap.to("#heroDesc", {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.4,
    ease: "power3.out",
  });

  gsap.to(".cta-button", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.7,
    ease: "back.out(1.5)",
  });

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

  const aboutSection = document.querySelector(".about-tabular");
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
  });

  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    const spans = menuToggle.querySelectorAll("span");

    if (navMenu.classList.contains("active")) {
      spans[0].style.transform = "rotate(45deg) translate(5px, 6px)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "rotate(-45deg) translate(5px, -6px)";
    } else {
      spans[0].style.transform = "none";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "none";
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
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
});

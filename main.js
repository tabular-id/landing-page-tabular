 gsap.registerPlugin(ScrollTrigger, TextPlugin);

    gsap.timeline()
        .from('#heroTitle', { 
                duration: 1.2, 
                y: 50, 
                opacity: 0, 
                ease: "power3.out" 
        })
        .from('#heroDesc', { 
            duration: 1, 
            y: 30, 
            opacity: 0, 
            ease: "power2.out" 
        }, "-=0.5")
        .from('#ctaButton', { 
            duration: 0.8, 
            scale: 0.8, 
            opacity: 0, 
            ease: "back.out(1.7)" 
        }, "-=0.3");

    gsap.to('#heroTitle', {
        duration: 3,
        text: "Bukan Sekadar Klien Database — Ini Revolusi Koneksi Data.",
        ease: "none",
        delay: 0.5
    });

    gsap.utils.toArray('.feature-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            },
            duration: 0.8,
            y: 50,
            opacity: 0,
            delay: i * 0.1,
            ease: "power2.out"
        });
    });

    gsap.utils.toArray('.db-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
            },
            duration: 0.6,
            scale: 0.8,
            opacity: 0,
            delay: i * 0.1,
            ease: "back.out(1.7)"
        });
    });

    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
            
        const spans = menuToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            gsap.to(spans[0], { rotation: 45, y: 7, duration: 0.3 });
            gsap.to(spans[1], { opacity: 0, duration: 0.3 });
            gsap.to(spans[2], { rotation: -45, y: -7, duration: 0.3 });
        } else {
            gsap.to(spans[0], { rotation: 0, y: 0, duration: 0.3 });
            gsap.to(spans[1], { opacity: 1, duration: 0.3 });
            gsap.to(spans[2], { rotation: 0, y: 0, duration: 0.3 });
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: target,
                    ease: "power2.inOut"
                });
            }
               
            navMenu.classList.remove('active');
        });
    });

    const searchInput = document.getElementById('smartSearch');
    const tableBody = document.getElementById('tableBody');
    const originalRows = Array.from(tableBody.querySelectorAll('tr'));

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
            
        originalRows.forEach(row => {
            const text = row.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                row.style.display = '';
                gsap.from(row, { opacity: 0, y: 20, duration: 0.3 });
            } else {
                row.style.display = 'none';
            }
        });
    });

    let sortOrder = {};
    function sortTable(columnIndex) {
        const rows = Array.from(tableBody.querySelectorAll('tr:not([style*="display: none"])'));
        const isAscending = !sortOrder[columnIndex];
        sortOrder[columnIndex] = isAscending;

        rows.sort((a, b) => {
            const aText = a.cells[columnIndex].textContent;
            const bText = b.cells[columnIndex].textContent;
                
            if (isAscending) {
                return aText.localeCompare(bText);
            } else {
                return bText.localeCompare(aText);
            }
        });


            rows.forEach((row, index) => {
                gsap.to(row, {
                    y: 0,
                    opacity: 1,
                    duration: 0.3,
                    delay: index * 0.05
                });
                tableBody.appendChild(row);
            });
        }

        const ctx = document.getElementById('performanceChart').getContext('2d');
        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Query Performance (ms)',
                    data: [12, 8, 6, 4, 3, 2],
                    borderColor: '#00f5ff',
                    backgroundColor: 'rgba(0, 245, 255, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 245, 255, 0.1)'
                        },
                        ticks: {
                            color: '#a1a1aa'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(139, 92, 246, 0.1)'
                        },
                        ticks: {
                            color: '#a1a1aa'
                        }
                    }
                }
            }
        });

        gsap.utils.toArray('.screenshot-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                },
                duration: 0.8,
                y: 50,
                opacity: 0,
                delay: i * 0.1,
                ease: "power2.out"
            });
        });

        document.querySelectorAll('.db-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    scale: 1.1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            card.addEventListener('click', () => {
                const dbName = card.getAttribute('data-db');
                gsap.to(card, {
                    scale: 0.95,
                    duration: 0.1,
                    yoyo: true,
                    repeat: 1,
                    ease: "power2.inOut"
                });
                
            });
        });

        let lastScrollY = window.scrollY;
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                gsap.to(header, { y: -100, duration: 0.3 });
            } else {
                gsap.to(header, { y: 0, duration: 0.3 });
            }
            lastScrollY = window.scrollY;
        });

        document.getElementById('ctaButton').addEventListener('click', () => {
            gsap.to('#ctaButton', {
                scale: 0.95,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                ease: "power2.inOut",
                onComplete: () => {

                    gsap.to('body', {
                        scale: 1.1,
                        opacity: 0.8,
                        duration: 0.5,
                        ease: "power2.out",
                        onComplete: () => {
                            alert('Launching Tabular App...');
                            gsap.to('body', {
                                scale: 1,
                                opacity: 1,
                                duration: 0.5,
                                ease: "power2.out"
                            });
                        }
                    });
                }
            });
        });

        gsap.to('.hero::before', {
            scrollTrigger: {
                trigger: '.hero',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            },
            y: -100,
            ease: 'none'
        });
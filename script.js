document.addEventListener('DOMContentLoaded', () => {
    // Project galleries data structure
    const projectGalleries = {
        'JobAi': [
            'Projects/Ongoing Projects/JobAi/JobAi@AppBuildersPH.jpg',
            'Projects/Ongoing Projects/JobAi/Login Screen.jpg',
            'Projects/Ongoing Projects/JobAi/Upload your Resume.jpg',
            'Projects/Ongoing Projects/JobAi/Portfolio or LinkedIn.jpg',
            'Projects/Ongoing Projects/JobAi/Target Roles.jpg',
            'Projects/Ongoing Projects/JobAi/Ready to Launch.jpg',
            'Projects/Ongoing Projects/JobAi/Profile Screen.jpg',
            'Projects/Ongoing Projects/JobAi/Home Screen.jpg',
            'Projects/Ongoing Projects/JobAi/Job Discovery Screen.jpg',
            'Projects/Ongoing Projects/JobAi/Paste Job Description.jpg',
            'Projects/Ongoing Projects/JobAi/Tailor Resume.jpg',
            'Projects/Ongoing Projects/JobAi/ATS Friendly Resume.jpg',
            'Projects/Ongoing Projects/JobAi/Application Tracker.jpg',
            'Projects/Ongoing Projects/JobAi/Update Status.jpg'
        ],
        'University Web Portal': [
            'Projects/University Web Portal/Login.jpg',
            'Projects/University Web Portal/Home.jpg',
            'Projects/University Web Portal/Messages.jpg',
            'Projects/University Web Portal/Profile.jpg',
            'Projects/University Web Portal/Accounts.jpg',
            'Projects/University Web Portal/Subjects.jpg',
            'Projects/University Web Portal/Credited Subjects.jpg',
            'Projects/University Web Portal/Grades.jpg',
            'Projects/University Web Portal/Advisement.jpg',
            'Projects/University Web Portal/Offerings.jpg'
        ],
        'BINI Music Streaming': [
            'Projects/BINI Music Streaming/Login.jpg',
            'Projects/BINI Music Streaming/Create Account.jpg',
            'Projects/BINI Music Streaming/Homepage_A.jpg',
            'Projects/BINI Music Streaming/Homepage_B.jpg',
            'Projects/BINI Music Streaming/Homepage_C.jpg',
            'Projects/BINI Music Streaming/Recent Favorites and New Releases.jpg',
            'Projects/BINI Music Streaming/Trending and Mostly Played.jpg',
            'Projects/BINI Music Streaming/Classic and All Time Hit.jpg',
            'Projects/BINI Music Streaming/Songs List.jpg',
            'Projects/BINI Music Streaming/Now Playing.jpg'
        ],
        'Arduino Projects': [
            'Projects/ARDUINO-PROJECTS/TinkerCad Projects/TinkerCad Projects.png',
            'Projects/ARDUINO-PROJECTS/TinkerCad Projects/Calculator using 4x4 Keypad and LCD Display i2c.png',
            'Projects/ARDUINO-PROJECTS/TinkerCad Projects/Distance Measurement.png',
            'Projects/ARDUINO-PROJECTS/TinkerCad Projects/Fire Alarm System.png',
            'Projects/ARDUINO-PROJECTS/TinkerCad Projects/IR Remote Controlled LED.png',
            'Projects/ARDUINO-PROJECTS/TinkerCad Projects/LCD Display.png',
            'Projects/ARDUINO-PROJECTS/TinkerCad Projects/Obstacle Avoiding Car.png',
            'Projects/ARDUINO-PROJECTS/TinkerCad Projects/Password Protected Security System.png',
            'Projects/ARDUINO-PROJECTS/Fritzing Projects/Schematic Diagram for 1 segment LED Display.png',
            'Projects/ARDUINO-PROJECTS/Fritzing Projects/Schematic Diagram for 2WD Obstacle Avoidiing Robot.jpg',
            'Projects/ARDUINO-PROJECTS/Fritzing Projects/Schematic Diagram for 4 segment LED Display.jpg',
            'Projects/ARDUINO-PROJECTS/Fritzing Projects/Schematic Diagram for 8x8 LED Matrix.png',
            'Projects/ARDUINO-PROJECTS/Fritzing Projects/Schematic Diagram for Arduino-Based Calculator .jpg',
            'Projects/ARDUINO-PROJECTS/Fritzing Projects/Schematic Diagram for Bluetooth_Controlled_Obstacle_Avoiding_Car.png',
            'Projects/ARDUINO-PROJECTS/Fritzing Projects/Schematic Diagram for Distance Measurement.jpg',
            'Projects/ARDUINO-PROJECTS/Fritzing Projects/Schematic Diagram for Fire and Gas Alarm System.jpg',
            'Projects/ARDUINO-PROJECTS/Fritzing Projects/Schematic Diagram for GSM_Module_Sim800l_with_Button.jpg',
            'Projects/ARDUINO-PROJECTS/Fritzing Projects/Schematic Diagram for Joystick with DC Motor.jpg',
            'Projects/ARDUINO-PROJECTS/Fritzing Projects/Schematic Diagram for LCD Display.jpg',
            'Projects/ARDUINO-PROJECTS/Fritzing Projects/Schematic Diagram for RFID Door Locked System.gif',
            'Projects/ARDUINO-PROJECTS/Fritzing Projects/Schematic Diagram for Water Level Indicator.jpg'
        ],
        'Expense Tracking System': [
            'Projects/Expense Tracking System/login page.png',
            'Projects/Expense Tracking System/reset password.png',
            'Projects/Expense Tracking System/homepage.png',
            'Projects/Expense Tracking System/homepage with sidebar.png',
            'Projects/Expense Tracking System/users with sidebar.png',
            'Projects/Expense Tracking System/add user.png',
            'Projects/Expense Tracking System/user reset password.png',
            'Projects/Expense Tracking System/budget requests with sidebar.png',
            'Projects/Expense Tracking System/budget requests.png',
            'Projects/Expense Tracking System/budget details.png',
            'Projects/Expense Tracking System/expenses with sidebar.png',
            'Projects/Expense Tracking System/expense image.png',
            'Projects/Expense Tracking System/liquidations with sidebar.png',
            'Projects/Expense Tracking System/liquidation details.png',
            'Projects/Expense Tracking System/profile with sidebar.png',
            'Projects/Expense Tracking System/profile.png',
            'Projects/Expense Tracking System/logout.png'
        ],
        'Brick Breaker CpE': [
            'Projects/Brick Breaker CpE/Welcome Screen.jpg',
            'Projects/Brick Breaker CpE/How to Play Screen.jpg',
            'Projects/Brick Breaker CpE/Default Play Menu Screen.jpg',
            'Projects/Brick Breaker CpE/Try Again.jpg',
            'Projects/Brick Breaker CpE/Level Up.jpg',
            'Projects/Brick Breaker CpE/Play Menu Screen.jpg',
            'Projects/Brick Breaker CpE/Game Completed Screen.jpg',
            'Projects/Brick Breaker CpE/Credited Subjects Screen.jpg',
        ],
        'TicTac Toe': [
            'Projects/TicTac Toe/Homepage.jpg',
            'Projects/TicTac Toe/Create Game Online.jpg',
            'Projects/TicTac Toe/Join Game Online.jpg',
            'Projects/TicTac Toe/Start game.jpg',
            'Projects/TicTac Toe/O Turn.jpg'
        ],
        'Internship Experience': [
            'Internships/Deployment.jpg',
            'Internships/ADNU OJT.jpg',
            'Internships/Day 1.jpg',
            'Internships/Reporting.jpg'
        ],
        'Field Trip Experience': [
            'Seminars and Fieldtrips/BRP Hydrographer Presbitero.jpg',
            'Seminars and Fieldtrips/Vessel Traffic Management System.jpg',
            'Seminars and Fieldtrips/GigaMare.jpg',
            'Seminars and Fieldtrips/wistron.jpg',
            'Seminars and Fieldtrips/Law Enforcement Department.jpg',
            'Seminars and Fieldtrips/PLDT & Smart.jpg'
        ]
    };

    // Event galleries data structure
    const eventGalleries = {
        'Breadboarding': [
            'Events/Breadboarding/1st year/1.jpg',
            'Events/Breadboarding/1st year/2.jpg',
            'Events/Breadboarding/1st year/3.jpg',
            'Events/Breadboarding/1st year/4.jpg',
            'Events/Breadboarding/1st year/5.jpg',
            'Events/Breadboarding/2nd year/1.jpg',
            'Events/Breadboarding/2nd year/2.jpg',
            'Events/Breadboarding/2nd year/3.jpg',
            'Events/Breadboarding/2nd year/4.jpg',
            'Events/Breadboarding/2nd year/5.jpg',
            'Events/Breadboarding/2nd year/6.jpg',
            'Events/Breadboarding/3rd year/1.jpg',
            'Events/Breadboarding/3rd year/2.jpg',
            'Events/Breadboarding/3rd year/3.jpg',
            'Events/Breadboarding/3rd year/4.jpg',
            'Events/Breadboarding/4th year/1.jpg',
            'Events/Breadboarding/4th year/2.jpg',
            'Events/Breadboarding/4th year/3.jpg',
            'Events/Breadboarding/4th year/4.jpg'
        ],
        'LAAD Software Festival': [
            'Events/LAAD Software Festival/1.jpg',
            'Events/LAAD Software Festival/2.jpg',
            'Events/LAAD Software Festival/3.jpg',
            'Events/LAAD Software Festival/4.jpg',
            'Events/LAAD Software Festival/5.jpg',
            'Events/LAAD Software Festival/6.jpg',
            'Events/LAAD Software Festival/7.jpg',
            'Events/LAAD Software Festival/8.jpg',
            'Events/LAAD Software Festival/9.jpg',
            'Events/LAAD Software Festival/10.jpg'
        ],
        'Packethacks 2024': [
            'Events/Packethacks 2024/1.jpg',
            'Events/Packethacks 2024/2.jpg',
            'Events/Packethacks 2024/3.jpg',
            'Events/Packethacks 2024/4.jpg',
            'Events/Packethacks 2024/5.jpg',
            'Events/Packethacks 2024/6.jpg',
            'Events/Packethacks 2024/7.jpg'
        ]
    };

    let currentGallery = [];
    let currentImageIndex = 0;
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const rootElement = document.documentElement;
    
    // Check saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        rootElement.classList.add('light-mode');
    }

    themeToggle.addEventListener('click', () => {
        // Add transition class for smooth animation
        document.documentElement.classList.add('theme-transition');
        
        rootElement.classList.toggle('light-mode');
        if (rootElement.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
        
        // Remove the class after transition completes
        setTimeout(() => {
            document.documentElement.classList.remove('theme-transition');
        }, 500);
    });

    // Typing Effect
    const textElement = document.querySelector('.typing-text');
    const texts = ['Backend Developer', 'Android Developer', 'Software Engineer', 'Tech Enthusiast'];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        textElement.textContent = letter;

        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000); // Pause at end of word
        } else {
            setTimeout(type, 100);
        }
    }

    // Start typing effect if element exists
    if (textElement) {
        type();
    }

    // Enhanced Lightbox Functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightbox = document.querySelector('.close-lightbox');

    // Open project gallery function
    window.openProjectGallery = (projectName) => {
        const gallery = projectGalleries[projectName];
        if (gallery && gallery.length > 0) {
            currentGallery = gallery;
            currentImageIndex = 0;

            // Preload the first image before showing lightbox
            const img = new Image();
            img.onload = () => {
                updateLightboxImage();
                lightbox.style.display = 'block';
                // Trigger fade-in animation
                setTimeout(() => {
                    lightbox.classList.add('active');
                }, 10);
                document.body.style.overflow = 'hidden';
            };
            img.src = gallery[0];
        }
    };

    // Open event gallery function
    window.openEventGallery = (eventName) => {
        const gallery = eventGalleries[eventName];
        if (gallery && gallery.length > 0) {
            currentGallery = gallery;
            currentImageIndex = 0;

            // Preload the first image before showing lightbox
            const img = new Image();
            img.onload = () => {
                updateLightboxImage();
                lightbox.style.display = 'block';
                // Trigger fade-in animation
                setTimeout(() => {
                    lightbox.classList.add('active');
                }, 10);
                document.body.style.overflow = 'hidden';
            };
            img.src = gallery[0];
        }
    };

    // Update lightbox image and navigation
    function updateLightboxImage() {
        if (currentGallery.length > 0) {
            lightboxImg.src = currentGallery[currentImageIndex];

            // Add filename caption only for non-event galleries
            const isEventImage = currentGallery[currentImageIndex].includes('Events/');
            if (!isEventImage) {
                let filename = currentGallery[currentImageIndex].split('/').pop();
                const lastDotIndex = filename.lastIndexOf('.');
                if (lastDotIndex > 0) {
                    filename = filename.substring(0, lastDotIndex);
                }
                let caption = lightbox.querySelector('.image-caption');
                if (!caption) {
                    caption = document.createElement('div');
                    caption.className = 'image-caption';
                    lightbox.appendChild(caption);
                }
                caption.textContent = filename;
            } else {
                // Remove caption if it exists for event images
                const existingCaption = lightbox.querySelector('.image-caption');
                if (existingCaption) {
                    existingCaption.remove();
                }
            }

            updateGalleryNavigation();
        }
    }

    // Update gallery navigation buttons and counter
    function updateGalleryNavigation() {
        // Remove existing navigation if any
        const existingNav = lightbox.querySelector('.gallery-navigation');
        if (existingNav) {
            existingNav.remove();
        }

        if (currentGallery.length > 1) {
            // Create navigation container
            const navDiv = document.createElement('div');
            navDiv.className = 'gallery-navigation';

            // Previous button
            const prevBtn = document.createElement('button');
            prevBtn.className = 'gallery-nav-btn prev-btn';
            prevBtn.innerHTML = '‹';
            prevBtn.onclick = (e) => {
                e.stopPropagation();
                navigateGallery(-1);
            };

            // Image counter
            const counter = document.createElement('div');
            counter.className = 'gallery-counter';
            counter.textContent = `${currentImageIndex + 1} / ${currentGallery.length}`;

            // Next button
            const nextBtn = document.createElement('button');
            nextBtn.className = 'gallery-nav-btn next-btn';
            nextBtn.innerHTML = '›';
            nextBtn.onclick = (e) => {
                e.stopPropagation();
                navigateGallery(1);
            };

            navDiv.appendChild(prevBtn);
            navDiv.appendChild(counter);
            navDiv.appendChild(nextBtn);
            lightbox.appendChild(navDiv);
        }
    }

    // Navigate through gallery images
    function navigateGallery(direction) {
        currentImageIndex += direction;
        if (currentImageIndex < 0) {
            currentImageIndex = currentGallery.length - 1;
        } else if (currentImageIndex >= currentGallery.length) {
            currentImageIndex = 0;
        }
        updateLightboxImage();
    }

    // Open lightbox function (for single images)
    window.openLightbox = (imageSrc) => {
        currentGallery = [imageSrc];
        currentImageIndex = 0;

        // Preload the image before showing lightbox
        const img = new Image();
        img.onload = () => {
            updateLightboxImage();
            lightbox.style.display = 'block';
            // Trigger fade-in animation
            setTimeout(() => {
                lightbox.classList.add('active');
            }, 10);
            document.body.style.overflow = 'hidden';
        };
        img.src = imageSrc;
    };

    if (window.pdfjsLib) {
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    }

    function drawCertificatePage(preview, page) {
        const canvas = preview.querySelector('canvas');
        const bounds = preview.getBoundingClientRect();
        const rotation = ((page.rotate || 0) + (preview._rotationCorrection || 0)) % 360;
        const pageViewport = page.getViewport({ scale: 1, rotation });
        const scale = Math.min(
            bounds.width / pageViewport.width,
            bounds.height / pageViewport.height
        );
        const pixelRatio = window.devicePixelRatio || 1;
        const viewport = page.getViewport({
            scale: scale * pixelRatio,
            rotation
        });

        canvas.width = viewport.width;
        canvas.height = viewport.height;
        canvas.style.width = `${pageViewport.width * scale}px`;
        canvas.style.height = `${pageViewport.height * scale}px`;

        return page.render({
            canvasContext: canvas.getContext('2d'),
            viewport
        }).promise;
    }

    function renderCertificatePreview(preview, pdfSrc) {
        if (!window.pdfjsLib) {
            useNativeCertificatePreview(preview, pdfSrc);
            return;
        }

        pdfjsLib.getDocument({
            url: pdfSrc,
            disableWorker: window.location.protocol === 'file:'
        }).promise
            .then((pdf) => pdf.getPage(1))
            .then((page) => {
                preview._pdfPage = page;
                preview.classList.add('is-rendered');
                if (window.ResizeObserver) {
                    preview._resizeObserver = new ResizeObserver(() => {
                        drawCertificatePage(preview, page);
                    });
                    preview._resizeObserver.observe(preview);
                }
                return drawCertificatePage(preview, page);
            })
            .catch(() => useNativeCertificatePreview(preview, pdfSrc));
    }

    function useNativeCertificatePreview(preview, pdfSrc) {
        if (preview.classList.contains('preview-fallback')) {
            return;
        }

        preview.classList.add('preview-fallback');
        preview.replaceChildren();

        const previewFrame = document.createElement('iframe');
        previewFrame.src = `${pdfSrc}#page=1&zoom=page-fit&toolbar=0&navpanes=0&scrollbar=0`;
        previewFrame.title = 'Certificate first-page preview';
        previewFrame.loading = 'lazy';
        preview.appendChild(previewFrame);
    }

    document.querySelectorAll('#certifications .cert-item, #seminars .certificate-item').forEach((certificate) => {
        const viewLink = certificate.querySelector('a[onclick*="openCertificateLightbox"]');
        const clickHandler = viewLink?.getAttribute('onclick') || certificate.getAttribute('onclick');
        const pdfMatch = clickHandler?.match(/openCertificateLightbox\('([^']+\.pdf)'\)/i);

        if (!pdfMatch) {
            return;
        }

        const preview = document.createElement('div');
        preview.className = 'cert-preview';
        preview.setAttribute('aria-hidden', 'true');
        if (/Smart Transport Surveys/i.test(pdfMatch[1])) {
            preview._rotationCorrection = 180;
        }

        const previewCanvas = document.createElement('canvas');
        previewCanvas.setAttribute('aria-label', 'Certificate first-page preview');

        preview.appendChild(previewCanvas);
        certificate.insertBefore(preview, certificate.firstElementChild);
        renderCertificatePreview(preview, pdfMatch[1]);
    });

    // Open certificate lightbox function
    window.openCertificateLightbox = (pdfSrc) => {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');

        // Create container with overflow hidden to crop PDF controls
        const container = document.createElement('div');
        container.style.cssText = `
            width: 90%;
            height: 90vh;
            border-radius: 10px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            overflow: hidden;
            background: white;
        `;

        // Create PDF viewer iframe - slightly larger to crop controls
        const pdfViewer = document.createElement('iframe');
        pdfViewer.src = pdfSrc;
        pdfViewer.style.cssText = `
            width: calc(100% + 60px);
            height: calc(100% + 60px);
            border: none;
            position: absolute;
            top: -40px;
            left: -30px;
        `;

        container.appendChild(pdfViewer);
        lightbox.appendChild(container);

        // Hide the main image
        lightboxImg.style.display = 'none';

        // Show lightbox
        lightbox.style.display = 'block';
        setTimeout(() => {
            lightbox.classList.add('active');
        }, 10);
        document.body.style.overflow = 'hidden';

        // Update close function to clean up PDF viewer
        const originalCloseLightbox = closeLightboxFunction;
        window.closeLightboxFunction = () => {
            lightbox.classList.remove('active');
            setTimeout(() => {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto';
                // Remove PDF container and show image again
                if (container.parentNode) {
                    container.parentNode.removeChild(container);
                }
                lightboxImg.style.display = 'block';
            }, 300);

            // Clean up gallery navigation
            const existingNav = lightbox.querySelector('.gallery-navigation');
            if (existingNav) {
                existingNav.remove();
            }

            // Clean up image caption
            const existingCaption = lightbox.querySelector('.image-caption');
            if (existingCaption) {
                existingCaption.remove();
            }

            // Restore original close function
            window.closeLightboxFunction = originalCloseLightbox;
        };
    };

    // Close lightbox
    function closeLightboxFunction() {
        lightbox.classList.remove('active');
        setTimeout(() => {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);

        // Clean up gallery navigation
        const existingNav = lightbox.querySelector('.gallery-navigation');
        if (existingNav) {
            existingNav.remove();
        }

        // Clean up image caption
        const existingCaption = lightbox.querySelector('.image-caption');
        if (existingCaption) {
            existingCaption.remove();
        }

        currentGallery = [];
        currentImageIndex = 0;
    }

    if (closeLightbox) {
        closeLightbox.addEventListener('click', closeLightboxFunction);
    }

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightboxFunction();
        }
    });

    // Close lightbox with Escape key and arrow key navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'block') {
            if (e.key === 'Escape') {
                closeLightboxFunction();
            } else if (currentGallery.length > 1) {
                if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    navigateGallery(-1);
                } else if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    navigateGallery(1);
                }
            }
        }
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Observe project cards
    document.querySelectorAll('.project-card, .timeline-item, .org-item, .seminar-item, .cert-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightNavigation() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);

    // Add active class styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .nav-link.active {
            color: var(--accent-color) !important;
        }
        .nav-link.active::after {
            width: 100% !important;
        }
    `;
    document.head.appendChild(style);

    // Optimized parallax effect for hero section using requestAnimationFrame
    let isScrolling = false;
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const hero = document.querySelector('.hero');
                if (hero) {
                    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
                }
                isScrolling = false;
            });
            isScrolling = true;
        }
    }, { passive: true });

    // Project card hover effect with tilt
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });

    // Add loading animation for images
    document.querySelectorAll('img:not(#lightbox-img)').forEach(img => {
        img.addEventListener('load', function () {
            this.style.animation = 'fadeIn 0.5s ease-in';
        });
    });

    // Add fadeIn animation
    const fadeStyle = document.createElement('style');
    fadeStyle.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(fadeStyle);

    // Contact Form Handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            // Create mailto link with form data
            const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
            const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
            const mailtoLink = `mailto:alfrancisbadillapaz10@gmail.com?subject=${subject}&body=${body}`;

            // Open email client
            window.location.href = mailtoLink;

            // Show success message
            showNotification('Opening your email client...', 'success');

            // Reset form
            contactForm.reset();
        });
    }

    // Notification function
    function showNotification(message, type = 'info') {
        // Remove existing notification if any
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? 'var(--accent-color)' : 'var(--accent-secondary)'};
            color: var(--bg-color);
            padding: 15px 20px;
            border-radius: 8px;
            font-weight: 500;
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
            max-width: 300px;
        `;

        // Add slide in animation
        const slideStyle = document.createElement('style');
        slideStyle.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(slideStyle);

        // Add to page
        document.body.appendChild(notification);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideIn 0.3s ease-out reverse';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // Expose showNotification globally
    window.showNotification = showNotification;

    // Interactive Exhibit Demo Accounts Console
    const accountTabs = document.querySelectorAll('.account-tab');
    const accountDetails = document.querySelectorAll('.account-details');

    if (accountTabs.length > 0) {
        accountTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const role = tab.getAttribute('data-role');

                // Switch active tab
                accountTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                // Switch active account detail panel
                accountDetails.forEach(detail => {
                    detail.classList.remove('active');
                    if (detail.id === `acc-${role}`) {
                        detail.classList.add('active');
                    }
                });

                // Scroll the Ride.ADNU Showcase carousel to the corresponding role
                const showcaseInner = document.querySelector('.thesis-section .event-carousel');

                if (showcaseInner) {
                    // Find the label for this role
                    const labels = showcaseInner.querySelectorAll('.year-label');
                    let targetMarker = null;

                    // We only need the first occurrence (before cloning)
                    for (let label of labels) {
                        if (label.textContent.toLowerCase() === role.toLowerCase()) {
                            targetMarker = label.closest('.year-marker');
                            break;
                        }
                    }

                    if (targetMarker) {
                        // Use Web Animations API to change the position of the CSS animation without stopping it
                        const anims = showcaseInner.getAnimations();
                        if (anims.length > 0) {
                            const anim = anims[0];
                            const duration = anim.effect.getTiming().duration;

                            // The original content is half of the total scrollWidth (because it was cloned)
                            const originalWidth = showcaseInner.scrollWidth / 2;

                            let targetOffset = targetMarker.offsetLeft;
                            targetOffset -= 20; // 20px padding from the left edge
                            if (targetOffset < 0) targetOffset = 0;

                            // Calculate the time ratio
                            const ratio = targetOffset / originalWidth;

                            // Jump to that specific time in the continuous animation
                            anim.currentTime = (ratio * duration) % duration;
                        }
                    }
                }
            });
        });
    }

    // Interactive Copy Buttons for Credentials
    const copyButtons = document.querySelectorAll('.copy-btn');
    if (copyButtons.length > 0) {
        copyButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const valueEl = btn.parentNode.querySelector('.cred-value');
                if (valueEl) {
                    const textToCopy = valueEl.textContent.trim();

                    navigator.clipboard.writeText(textToCopy)
                        .then(() => {
                            // Show success toast notification
                            showNotification(`Copied to clipboard: "${textToCopy}"`, 'success');

                            // Visual feedback on button
                            btn.classList.add('copied');
                            const icon = btn.querySelector('i');
                            if (icon) {
                                icon.className = 'fas fa-check';
                            }

                            // Reset button state after 2 seconds
                            setTimeout(() => {
                                btn.classList.remove('copied');
                                if (icon) {
                                    icon.className = 'far fa-copy';
                                }
                            }, 2000);
                        })
                        .catch(err => {
                            console.error('Failed to copy text: ', err);
                            showNotification('Failed to copy credentials', 'error');
                        });
                }
            });
        });
    }

    // Initialize seamless carousels (cloning for CSS animation)
    function initCarousels() {
        const carousels = document.querySelectorAll('.event-carousel, .internship-gallery');

        carousels.forEach(carousel => {
            // Get all images and markers in the carousel
            const items = Array.from(carousel.children);

            // Clone items for seamless scrolling
            items.forEach(item => {
                const clone = item.cloneNode(true);
                carousel.appendChild(clone);
            });
        });
    }

    // Initialize carousels (cloning must happen BEFORE attaching click handlers)
    initCarousels();

    // Add click handlers to event carousel images (including clones)
    const carouselImages = document.querySelectorAll('.event-carousel-img');
    carouselImages.forEach(img => {
        img.addEventListener('click', function () {
            const carousel = this.closest('.event-carousel');
            if (carousel) {
                const allImages = Array.from(carousel.querySelectorAll('.event-carousel-img'));
                const uniqueSrcs = [...new Set(allImages.map(img => img.getAttribute('src')))];
                const src = this.getAttribute('src');
                const index = uniqueSrcs.indexOf(src);
                
                if (uniqueSrcs.length > 0) {
                    currentGallery = uniqueSrcs;
                    currentImageIndex = index !== -1 ? index : 0;
                    
                    const preloadImg = new Image();
                    preloadImg.onload = () => {
                        updateLightboxImage();
                        lightbox.style.display = 'block';
                        setTimeout(() => {
                            lightbox.classList.add('active');
                        }, 10);
                        document.body.style.overflow = 'hidden';
                    };
                    preloadImg.src = uniqueSrcs[currentImageIndex];
                    return;
                }
            }
            
            // Fallback
            const src = this.getAttribute('src');
            openLightbox(src);
        });
    });

    // Add click handlers to internship gallery images (including clones)
    const internshipImages = document.querySelectorAll('.internship-gallery .gallery-img');
    internshipImages.forEach(img => {
        img.addEventListener('click', function () {
            const gallery = this.closest('.internship-gallery');
            if (gallery) {
                const allImages = Array.from(gallery.querySelectorAll('.gallery-img'));
                const uniqueSrcs = [...new Set(allImages.map(img => img.getAttribute('src')))];
                const src = this.getAttribute('src');
                const index = uniqueSrcs.indexOf(src);
                
                if (uniqueSrcs.length > 0) {
                    currentGallery = uniqueSrcs;
                    currentImageIndex = index !== -1 ? index : 0;
                    
                    const preloadImg = new Image();
                    preloadImg.onload = () => {
                        updateLightboxImage();
                        lightbox.style.display = 'block';
                        setTimeout(() => {
                            lightbox.classList.add('active');
                        }, 10);
                        document.body.style.overflow = 'hidden';
                    };
                    preloadImg.src = uniqueSrcs[currentImageIndex];
                    return;
                }
            }
            
            // Fallback
            const src = this.getAttribute('src');
            openLightbox(src);
        });
    });

    // Initialize page
    highlightNavigation();
});

/*
 * Ryan Bevins Portfolio
 * Date: 2025
 */

document.addEventListener('DOMContentLoaded', function() {
    // Handle preloader
    initPreloader();
    
    // Initialize custom cursor
    initCustomCursor();
    
    // Initialize header scroll effect
    initHeaderScroll();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize load more projects button
    // initLoadMoreProjects();  // This is now handled by portfolio-renderer.js
});

// Preloader functionality
function initPreloader() {
    const preloader = document.querySelector('.preloader');
    const main = document.querySelector('main');
    
    if (!preloader || !main) return;
    
    // Add page-reveal class to main
    main.classList.add('page-reveal');
    
    // Fade out the preloader after a short delay
    setTimeout(function() {
        preloader.classList.add('fade-out');
        
        // Reveal the page content
        setTimeout(function() {
            main.classList.add('active');
            
            // Remove preloader from DOM after animation completes
            setTimeout(function() {
                preloader.remove();
            }, 500);
        }, 300);
    }, 1500);
}

// Custom cursor effect
function initCustomCursor() {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    if (!cursor || !cursorFollower) return;
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(function() {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });
    
    // Add hover effect to links and buttons
    const links = document.querySelectorAll('a, button, .portfolio-item, .skill-item, .studio-item');
    
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            cursor.classList.add('active');
            cursorFollower.classList.add('active');
        });
        
        link.addEventListener('mouseleave', function() {
            cursor.classList.remove('active');
            cursorFollower.classList.remove('active');
        });
    });
    
    // Hide cursor when leaving window
    document.addEventListener('mouseout', function(e) {
        if (e.relatedTarget === null) {
            cursor.style.opacity = '0';
            cursorFollower.style.opacity = '0';
        }
    });
    
    document.addEventListener('mouseover', function() {
        cursor.style.opacity = '1';
        cursorFollower.style.opacity = '1';
    });
}

// Header scroll effect
function initHeaderScroll() {
    const header = document.querySelector('header');
    
    if (!header) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Mobile menu toggle
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (!menuToggle || !nav) return;
    
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    // Update active nav link on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    if (!sections.length || !navLinks.length) return;
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Fade in elements on scroll - ensure they start invisible
    const fadeElements = document.querySelectorAll('.portfolio-item, .skill-item, .studio-item, .section-header');
    
    if (fadeElements.length) {
        // First make sure all elements start invisible
        fadeElements.forEach(element => {
            element.style.opacity = '0';
        });
        
        const fadeInOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const fadeInObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fadeIn');
                    observer.unobserve(entry.target);
                }
            });
        }, fadeInOptions);
        
        fadeElements.forEach(element => {
            fadeInObserver.observe(element);
        });
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (!targetElement) return;
        
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
}); 
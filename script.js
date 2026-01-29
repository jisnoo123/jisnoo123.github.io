// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const html = document.documentElement;
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    // Cache icon elements for better performance
    const logoIcons = document.querySelectorAll('img[src*="files/images/logos/"]');
    
    // Mobile menu toggle
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenuToggle.classList.toggle('active');
            navMenu.classList.toggle('mobile-open');
        });
        
        // Close mobile menu when clicking on a nav link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('mobile-open');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('mobile-open')) {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('mobile-open');
            }
        });
    }
    
    // Function to swap icons based on theme
    function swapIcons(isDarkMode) {
        logoIcons.forEach(icon => {
            const src = icon.getAttribute('src');
            if (isDarkMode) {
                // Switch to dark mode icons (add -dark suffix before .png)
                if (!src.includes('-dark.png')) {
                    icon.setAttribute('src', src.replace(/\.png$/, '-dark.png'));
                }
            } else {
                // Switch back to light mode icons (remove -dark suffix)
                if (src.includes('-dark.png')) {
                    icon.setAttribute('src', src.replace(/-dark\.png$/, '.png'));
                }
            }
        });
    }
    
    // Cache media query for system theme preference
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Function to get system theme preference
    function getSystemTheme() {
        return darkModeMediaQuery.matches ? 'dark' : 'light';
    }
    
    // Function to apply theme
    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            swapIcons(true);
        } else {
            body.classList.remove('dark-mode');
            swapIcons(false);
        }
    }
    
    // Transfer dark mode from html to body if it was set during initial load
    if (html.classList.contains('dark-mode-loading')) {
        body.classList.add('dark-mode');
        html.classList.remove('dark-mode-loading');
        swapIcons(true);
    } else {
        // Only apply theme if it wasn't already set during initial load
        const savedTheme = localStorage.getItem('theme');
        const currentTheme = savedTheme || getSystemTheme();
        applyTheme(currentTheme);
    }
    
    // Listen for system theme changes (only if user hasn't manually set a preference)
    darkModeMediaQuery.addEventListener('change', (e) => {
        // Only auto-switch if user hasn't manually set a theme preference
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            applyTheme(newTheme);
        }
    });
    
    // Toggle theme
    themeToggle.addEventListener('click', function() {
        // Determine new theme (opposite of current)
        const newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
        
        // Apply the new theme
        applyTheme(newTheme);
        
        // Save theme preference
        localStorage.setItem('theme', newTheme);
    });
    
    // Smooth scroll for navigation links
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
    
    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for fade-in animation
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Immediately show hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
    }
});

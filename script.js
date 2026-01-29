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
            
            // Skip bulb icons - they are handled by CSS display properties
            if (src.includes('bulb.png') || src.includes('bulb_off.png')) {
                return;
            }
            
            // Skip navbar icons - they should always use light-colored versions (dark.png suffix)
            // because the navbar is always dark in both light and dark modes
            if (src.includes('menu-dark.png') || src.includes('close-dark.png') ||
                src.includes('teaching_resources-dark.png') || src.includes('blogs-dark.png') ||
                src.includes('gallery-dark.png')) {
                return;
            }
            
            if (isDarkMode) {
                // Special handling for bullet icons
                if (src.includes('bullets.png') && !src.includes('bullets-dark.png')) {
                    icon.setAttribute('src', src.replace('bullets.png', 'bullets-dark.png'));
                }
                // Standard dark mode icon swap (add -dark suffix before .png)
                else if (!src.includes('-dark.png')) {
                    icon.setAttribute('src', src.replace(/\.png$/, '-dark.png'));
                }
            } else {
                // Special handling for bullet icons
                if (src.includes('bullets-dark.png')) {
                    icon.setAttribute('src', src.replace('bullets-dark.png', 'bullets.png'));
                }
                // Standard light mode icon swap (remove -dark suffix)
                else if (src.includes('-dark.png')) {
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
    function applyTheme(theme, saveToStorage = false) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            swapIcons(true);
        } else {
            body.classList.remove('dark-mode');
            swapIcons(false);
        }
        
        // Save to localStorage if requested
        if (saveToStorage) {
            try {
                localStorage.setItem('theme', theme);
            } catch (e) {
                // localStorage unavailable, continue without saving
                console.warn('Unable to save theme preference:', e);
            }
        }
    }
    
    // Get the current theme preference
    function getCurrentTheme() {
        try {
            const savedTheme = localStorage.getItem('theme');
            // Validate saved theme value
            if (savedTheme === 'dark' || savedTheme === 'light') {
                return savedTheme;
            }
        } catch (e) {
            // localStorage unavailable, fall back to system preference
            console.warn('Unable to access theme preference:', e);
        }
        return getSystemTheme();
    }
    
    // Transfer dark mode from html to body if it was set during initial load
    if (html.classList.contains('dark-mode-loading')) {
        body.classList.add('dark-mode');
        html.classList.remove('dark-mode-loading');
        swapIcons(true);
    } else {
        // Apply theme based on saved preference or system preference
        const currentTheme = getCurrentTheme();
        applyTheme(currentTheme);
    }
    
    // Listen for system theme changes only if no saved preference
    darkModeMediaQuery.addEventListener('change', (e) => {
        // Only follow system preference if user hasn't set a preference
        try {
            if (!localStorage.getItem('theme')) {
                const newTheme = e.matches ? 'dark' : 'light';
                applyTheme(newTheme);
            }
        } catch (e) {
            // localStorage unavailable, always follow system preference
            const newTheme = e.matches ? 'dark' : 'light';
            applyTheme(newTheme);
        }
    });
    
    // Toggle theme
    themeToggle.addEventListener('click', function() {
        // Determine new theme (opposite of current)
        const newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
        
        // Apply the new theme and save to localStorage
        applyTheme(newTheme, true);
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

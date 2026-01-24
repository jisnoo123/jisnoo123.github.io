// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Cache icon elements for better performance
    const logoIcons = document.querySelectorAll('img[src*="files/images/logos/"]');
    
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
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        swapIcons(true);
    }
    
    // Toggle theme
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        // Save theme preference
        const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        
        // Swap icons
        swapIcons(theme === 'dark');
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

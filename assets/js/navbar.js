// Mobile menu toggle functionality
    document.addEventListener('DOMContentLoaded', function() {
        const toggle = document.querySelector('.mobile-menu-toggle');
        const nav = document.querySelector('.nav-links');
        
        toggle.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
        });
        
        // Close menu when clicking a link (optional)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                toggle.classList.remove('active');
                nav.classList.remove('active');
            });
        });
    });
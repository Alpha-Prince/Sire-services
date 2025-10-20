    document.addEventListener('DOMContentLoaded', function() {
        const menuBtn = document.querySelector('.mobile-menu-btn');
        const nav = document.querySelector('header nav');
        
        // Check if elements exist
        if (!menuBtn || !nav) {
            console.log('Mobile menu elements not found');
            return;
        }
        
        // Mobile menu toggle
        menuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            nav.classList.toggle('active');
            menuBtn.textContent = nav.classList.contains('active') ? '✕' : '☰';
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking links
        document.querySelectorAll('header nav a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                menuBtn.textContent = '☰';
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('header') && nav.classList.contains('active')) {
                nav.classList.remove('active');
                menuBtn.textContent = '☰';
                document.body.style.overflow = '';
            }
        });
    });
    
import initializeSVGIcons from './addSvgIcons.js';
import initializeSwipers from './swiper.js';

document.addEventListener('DOMContentLoaded', () => {

    initializeSVGIcons();
    initializeSwipers();

    const menuToggle = document.getElementById('menu-toggle');
    const slidingMenu = document.getElementById('sliding-menu');
    const closeMenuButton = document.getElementById('close-menu');

    // Mobile Toggle Close
    menuToggle.addEventListener('change', () => {
        if (menuToggle.checked) {
            slidingMenu.classList.remove('-translate-x-full');
        } else {
            slidingMenu.classList.add('-translate-x-full');
        }
    });

    // Mobile Toggle Close
    closeMenuButton.addEventListener('click', () => {
        slidingMenu.classList.add('-translate-x-full');
        menuToggle.checked = false;
    });

    // Sticky WhatsApp Button on scrolll
    const whatsappButton = document.getElementById('whatsapp-button');
    const heroBtn = document.getElementById('intersacting-whatsapp-btn');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                whatsappButton.classList.add('hidden');
            } else {

                whatsappButton.classList.remove('hidden');
            }
        });
    }, {
        threshold: 0.1,
    });

    observer.observe(heroBtn);

    // Smooth Scrolling
    const sections = document.querySelectorAll('[data-anime]'); // Targeting elements with data-anime

    const scrollObserver = new IntersectionObserver((entries, scrollObserver) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animationType = entry.target.getAttribute('data-anime'); // Get the animation type

                // Add the 'visible' class to trigger the animation
                entry.target.classList.add('visible');

                // Stop observing once the animation is triggered
                scrollObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2, // Adjust threshold based on when you want the animation to trigger
    });

    // Observe each section
    sections.forEach(section => scrollObserver.observe(section));

    // certifications sorting tab
    function filterGallery(category) {
        const rows = document.querySelectorAll('.document-row');
        rows.forEach(row => {
            const rowType = row.getAttribute('data-type');
            if (category === 'all' || rowType === category) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }
});
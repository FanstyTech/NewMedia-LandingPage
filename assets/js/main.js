// Initialize AOS
AOS.init({
    duration: 800,
    offset: 100,
    once: true
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Smooth Scroll for Navigation Links
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

// Portfolio Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const itemsPerPage = 6;
let currentPage = 1;

// Filter portfolio items
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter items
        portfolioItems.forEach(item => {
            const category = item.getAttribute('data-category');
            if (filter === 'الكل' || filter === category) {
                item.style.display = 'block';
                setTimeout(() => item.style.opacity = '1', 10);
            } else {
                item.style.opacity = '0';
                setTimeout(() => item.style.display = 'none', 300);
            }
        });
    });
});

// Show More functionality
const showMoreBtn = document.getElementById('showMore');
if (showMoreBtn) {
    showMoreBtn.addEventListener('click', () => {
        currentPage++;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        
        let visibleItems = Array.from(portfolioItems).filter(item => 
            item.style.display !== 'none'
        );

        visibleItems.forEach((item, index) => {
            if (index >= startIndex && index < endIndex) {
                item.classList.remove('hidden');
            }
        });

        if (endIndex >= visibleItems.length) {
            showMoreBtn.style.display = 'none';
        }
    });
}

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('active');
    } else {
        backToTopButton.classList.remove('active');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value
        };

        // Basic validation
        if (!formData.fullName || !formData.email || !formData.phone || !formData.message) {
            alert('الرجاء ملء جميع الحقول المطلوبة');
            return;
        }

        // Here you would typically send the data to your server
        console.log('Form submitted:', formData);
        
        // Reset form
        contactForm.reset();
        
        // Show success message
        alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً');
    });
}

// Typing Animation
const typedElement = document.querySelector('#typed-text');
if (typedElement) {
    const typed = new Typed('#typed-text', {
        strings: [
            'نقدم خدمات إدارة حسابات السوشيل ميديا',
            'نصمم هويتك البصرية بإحترافية',
            'نطور مواقع إلكترونية عصرية',
            'نخطط حملاتك التسويقية بإبداع',
            'ندير إعلاناتك بكفاءة عالية'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true,
        rtl: true
    });
}

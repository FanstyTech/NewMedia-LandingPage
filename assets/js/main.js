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



// بيانات الخدمات
const servicesData = {
    web: {
        title: 'تصميم وتطوير مواقع الويب والموبايل',
        icon: 'web-uxui.png',
        description: 'نقدم خدمات تصميم وتطوير مواقع الويب والتطبيقات بأحدث التقنيات وأفضل الممارسات',
        features: [
            'تصميم واجهات المستخدم UI/UX',
            'تطوير المواقع والتطبيقات',
            'تحسين محركات البحث SEO',
            'تطوير المتاجر الإلكترونية',
            'صيانة وتحديث المواقع',
            'استضافة المواقع'
        ],
        subIcon :"Icon.svg"
    },
    design: {
        title: 'تصميم جرافيكي',
        icon: 'graphic-design-illustration.svg',
        description: 'نقدم خدمات التصميم الجرافيكي الإبداعية لتعزيز هويتك البصرية وجذب عملائك',
        features: [
            'تصميم الهوية البصرية',
            'تصميم المطبوعات',
            'تصميم وسائل التواصل الاجتماعي',
            'تصميم العلامات التجارية',
            'تصميم الإعلانات',
            'تصميم التغليف'
        ],
        subIcon :"pen-tool-01.svg"
    },
    ads: {
        title: 'إعلانات ممولة',
        icon: 'ads.png',
        description: 'نساعدك في الوصول إلى جمهورك المستهدف من خلال حملات إعلانية مدروسة وفعالة',
        features: [
            'إعلانات جوجل',
            'إعلانات فيسبوك وانستجرام',
            'إعلانات تويتر',
            'إعلانات لينكد إن',
            'إعلانات سناب شات',
            'تحليل وتحسين الحملات'
        ],
        subIcon :"announcement-03.svg"
    },
    marketing: {
        title: 'التسويق الرقمي',
        icon: 'digital-marketing.png',
        description: 'نقدم استراتيجيات تسويقية متكاملة لتنمية عملك وزيادة مبيعاتك',
        features: [
            'استراتيجيات التسويق الرقمي',
            'تسويق المحتوى',
            'تحسين محركات البحث',
            'التسويق عبر البريد الإلكتروني',
            'تحليلات وتقارير الأداء',
            'إدارة السمعة الإلكترونية'
        ],
        subIcon :"target-04.svg"
    },
    motion: {
        title: 'موشن جرافيكس',
        icon: 'motion-graphics.png',
        description: 'نقدم خدمات تصميم وإنتاج الفيديوهات التوضيحية والإعلانية بتقنية الموشن جرافيكس',
        features: [
            'فيديوهات تعريفية',
            'فيديوهات إعلانية',
            'فيديوهات تعليمية',
            'مقدمات وخواتم',
            'انفوجرافيك متحرك',
            'تصميم الشخصيات'
        ],
        subIcon :"play-square.svg"
    },
    social: {
        title: 'إدارة حسابات السوشيال ميديا',
        icon: 'social-media.png',
        description: 'نقدم خدمات إدارة حسابات التواصل الاجتماعي لتعزيز تواجدك الرقمي وزيادة التفاعل',
        features: [
            'إدارة المحتوى',
            'تصميم المنشورات',
            'جدولة المحتوى',
            'التفاعل مع الجمهور',
            'تحليل الأداء',
            'تقارير شهرية'
        ],
        subIcon :"announcement-03.svg"
    }
};

// تهيئة التفاعل مع الخدمات
function initializeServices() {
    const serviceCards = document.querySelectorAll('.service-card');
    const serviceDetailsSection = document.getElementById('service-details');
    const serviceDetailsContent = document.querySelector('.service-details-content');

    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const serviceType = card.dataset.service;
            const serviceData = servicesData[serviceType];

            // إزالة الحالة النشطة من جميع البطاقات
            serviceCards.forEach(c => c.classList.remove('active'));
            // إضافة الحالة النشطة للبطاقة المختارة
            card.classList.add('active');

            // تحديث محتوى التفاصيل
            serviceDetailsContent.innerHTML = `
                <section class="graphic-design-section py-5">
                    <div class="container">
                        <div class="row align-items-center gy-5">
                          
                            <div class="col-12 col-lg-6" data-aos="fade-left">
                                <div class="design-content">
                                    <h2 class="main-heading with-gradient mb-4">${serviceData.title}</h2>
                                    <p class="design-description mb-4">
                                        ${serviceData.description}
                                    </p>
                                    <ul class="design-features list-unstyled">
                                        ${serviceData.features.map(feature => `

                                            <li class="feature-item d-flex align-items-start gap-3 mb-3" data-aos="fade-up" data-aos-delay="100">
                                                <img src="assets/images/services/icons/${serviceData.subIcon}" alt="${serviceData.feature}" class="img-fluid">
                                                <span>${feature}</span>
                                            </li>
                                        
                                        `).join('')}
                                    
                                    </ul>
                                    <div class="mt-4">
                                        <a href="https://wa.me/+972568031114"   target="_blank" class="btn btn-primary rounded-pill">تواصل معنا واتساب </a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-lg-6" data-aos="fade-right">
                                <div class="design-image">
                                    <img src="assets/images/services/illustration/${serviceData.icon}" alt="${serviceData.title}" class="img-fluid">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

              
            `;

            // إظهار قسم التفاصيل
            serviceDetailsSection.classList.remove('d-none');

            // التمرير إلى قسم التفاصيل
            serviceDetailsSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
    // تنفيذ النقر على أول بطاقة تلقائيًا عند تحميل الصفحة
    if (serviceCards.length > 0) {
        serviceCards[0].click();
    }
    
}

// تهيئة جميع الوظائف عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
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

    // تهيئة التفاعل مع الخدمات
    initializeServices();

     // Click first service item automatically
     const firstServiceItem = document.querySelector('.service-item');
     if (firstServiceItem) {
         firstServiceItem.click();
     }
});

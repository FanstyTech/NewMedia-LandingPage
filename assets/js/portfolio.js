// بيانات المشاريع
const portfolioProjects = [
    {
        id: 1,
        title: "تصميم هوية بصرية",
        type: "design",
        client: "شركة التقنية المتطورة",
        date: "2024",
        image: "assets/images/portfolio/branding/branding-1.jpg",
        gallery: [
            "assets/images/portfolio/branding/branding-1.jpg",
            "assets/images/portfolio/branding/branding-2.jpg",
            "assets/images/portfolio/branding/branding-3.jpg",
            "assets/images/portfolio/branding/branding-4.jpg"
        ],
        description: "تصميم هوية بصرية كاملة تشمل الشعار والألوان والخطوط والمطبوعات لشركة متخصصة في مجال التقنية",
        tags: ["تصميم شعار", "هوية بصرية", "تصميم مطبوعات"],
        link: null
    },
    {
        id: 2,
        title: "تطوير موقع إلكتروني",
        type: "web",
        client: "شركة العقارات الذكية",
        date: "2024",
        image: "assets/images/portfolio/web/web-1.jpg",
        gallery: [
            "assets/images/portfolio/web/web-1.jpg",
            "assets/images/portfolio/web/web-2.jpg",
            "assets/images/portfolio/web/web-3.jpg",
            "assets/images/portfolio/web/web-4.jpg"
        ],
        description: "تصميم وتطوير موقع إلكتروني متجاوب مع كافة الأجهزة لشركة عقارات مع لوحة تحكم متكاملة",
        tags: ["تطوير ويب", "تصميم مواقع", "موقع متجاوب"],
        link: null
    },
    {
        id: 3,
        title: "إدارة حسابات سوشيال ميديا",
        type: "social",
        client: "ماركت بلس",
        date: "2024",
        image: "assets/images/portfolio/social/social-1.jpg",
        gallery: [
            "assets/images/portfolio/social/social-1.jpg",
            "assets/images/portfolio/social/social-2.jpg",
            "assets/images/portfolio/social/social-3.jpg",
            "assets/images/portfolio/social/social-4.jpg"
        ],
        description: "إدارة حسابات التواصل الاجتماعي وإنتاج محتوى احترافي مع تصميم منشورات جذابة",
        tags: ["سوشيال ميديا", "تسويق رقمي", "إدارة محتوى"],
        link: null
    },
    {
        id: 4,
        title: "حملة إعلانية ممولة",
        type: "ads",
        client: "مطاعم الذواق",
        date: "2024",
        image: "assets/images/portfolio/marketing/marketing-1.jpg",
        gallery: [
            "assets/images/portfolio/marketing/marketing-1.jpg",
            "assets/images/portfolio/marketing/marketing-2.jpg",
            "assets/images/portfolio/marketing/marketing-3.jpg",
            "assets/images/portfolio/marketing/marketing-4.jpg"
        ],
        description: "إدارة حملات إعلانية ممولة على منصات التواصل الاجتماعي مع تحليل النتائج وتحسين الأداء",
        tags: ["إعلانات ممولة", "تسويق رقمي", "فيسبوك آدز"],
        link: null
    },
    {
        id: 5,
        title: "فيديو موشن جرافيك",
        type: "motion",
        client: "أكاديمية التعليم الذكي",
        date: "2024",
        image: "assets/images/portfolio/photography/photo-1.jpg",
        gallery: [
            "assets/images/portfolio/photography/photo-1.jpg",
            "assets/images/portfolio/photography/photo-2.jpg",
            "assets/images/portfolio/photography/photo-3.jpg",
            "assets/images/portfolio/photography/photo-4.jpg"
        ],
        description: "تصميم وإنتاج فيديو موشن جرافيك تعريفي يشرح خدمات الأكاديمية بأسلوب جذاب",
        tags: ["موشن جرافيك", "مونتاج", "فيديو"],
        link: null
    },
    {
        id: 6,
        title: "تطبيق موبايل",
        type: "web",
        client: "تطبيق توصيل",
        date: "2024",
        image: "assets/images/portfolio/web/web-2.jpg",
        gallery: [
            "assets/images/portfolio/web/web-2.jpg",
            "assets/images/portfolio/web/web-3.jpg",
            "assets/images/portfolio/web/web-4.jpg",
            "assets/images/portfolio/web/web-5.jpg"
        ],
        description: "تصميم وبرمجة تطبيق موبايل لخدمة توصيل الطلبات مع لوحة تحكم للمتاجر والسائقين",
        tags: ["تطوير تطبيقات", "تصميم UI/UX", "React Native"],
        link: null
    }
];

// دالة إنشاء بطاقة المشروع
function createProjectCard(project) {
    const element = document.createElement('div');
    element.className = 'col-md-6 col-lg-4 portfolio-item';
    element.setAttribute('data-aos', 'fade-up');
    element.setAttribute('data-category', project.type);

    element.innerHTML = `
        <div class="portfolio-card">
            <div class="portfolio-card-img">
                <img src="${project.image}" alt="${project.title}">
                <div class="portfolio-card-overlay">
                    <div class="portfolio-card-actions">
                        <button class="action-btn view-project" data-project-id="${project.id}">
                            <i class="fas fa-eye"></i>
                        </button>
                        ${project.link ? `
                            <a href="${project.link}" class="action-btn" target="_blank">
                                <i class="fas fa-link"></i>
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
            <div class="portfolio-card-content">
                <div class="portfolio-card-tags">
                    ${project.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <h3 class="portfolio-card-title">${project.title}</h3>
                <p class="portfolio-card-description">${project.description.substring(0, 100)}${project.description.length > 100 ? '...' : ''}</p>
                
            </div>
        </div>
    `;

    // <div class="portfolio-card-meta">
    //                 <span><i class="fas fa-user"></i> ${project.client}</span>
    //                 <span><i class="fas fa-calendar"></i> ${project.date}</span>
    //             </div>
    // إضافة مستمع حدث للزر عرض المشروع
    const viewButton = element.querySelector('.view-project');
    if (viewButton) {
        viewButton.addEventListener('click', () => showProjectDetails(project));
    }

    return element;
}



// دالة عرض المشاريع
function displayProjects(category = 'all', limit = 6) {
    const portfolioContainer = document.querySelector('.portfolio-grid');
    const isHomePage = window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/');
    
    let projectsToShow = [];
    
    if (category === 'all' && isHomePage) {
        // في الصفحة الرئيسية، عند اختيار "الكل"، نعرض عنصر واحد من كل فئة
        const categories = ['design', 'web', 'social', 'ads', 'motion'];
        categories.forEach(cat => {
            const projectOfCategory = portfolioProjects.find(project => project.type === cat);
            if (projectOfCategory) {
                projectsToShow.push(projectOfCategory);
            }
        });


        // تحديد عدد العناصر التي سيتم عرضها
        const displayLimit = isHomePage ? limit : filteredProjects.length;
        projectsToShow = projectsToShow.slice(0, displayLimit);
    } else {
        // في باقي الحالات، نتبع المنطق السابق
        const filteredProjects = category === 'all' 
            ? portfolioProjects 
            : portfolioProjects.filter(project => project.type === category);
         
        projectsToShow = filteredProjects;

 
    }
    
    // تفريغ الحاوية
    portfolioContainer.innerHTML = '';
    
    // إضافة المشاريع
    projectsToShow.forEach(project => {
        const projectElement = createProjectCard(project);
        portfolioContainer.appendChild(projectElement);
    });
    
    // تهيئة AOS بعد إضافة العناصر
    AOS.refresh();
}


// دالة تحديث شبكة المشاريع
function updatePortfolioGrid(filter = 'all') {
    const gridContainer = document.getElementById('works-grid');
    if (!gridContainer) return;

    let filteredProjects = filter === 'all' 
        ? portfolioProjects 
        : portfolioProjects.filter(project => project.type === filter);

    gridContainer.innerHTML = '';
    filteredProjects.forEach(project => {
        gridContainer.appendChild(createProjectCard(project));
    });

    // تحديث AOS
    AOS.refresh();
}

// دالة عرض تفاصيل المشروع في المودال
function showProjectDetails(project) {
    const modal = new bootstrap.Modal(document.getElementById('portfolioModal'));
    
    // تحديث محتوى المودال
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalClient').textContent = project.client;
    document.getElementById('modalDate').textContent = project.date;
    document.getElementById('modalType').textContent = getProjectTypeName(project.type);
    document.getElementById('modalDescription').textContent = project.description;
    
    // تحديث الرابط
    const linkContainer = document.getElementById('modalLinkContainer');
    const modalLink = document.getElementById('modalLink');
    if (project.link) {
        modalLink.href = project.link;
        linkContainer.style.display = 'flex';
    } else {
        linkContainer.style.display = 'none';
    }
    
    // تحديث التاجات
    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = project.tags
        .map(tag => `<span class="tag">${tag}</span>`)
        .join('');
    
    // تحديث معرض الصور
    const galleryContainer = document.getElementById('modalGallery');
    const thumbsContainer = document.getElementById('modalThumbs');
    
    const images = project.gallery || [project.image];
    
    // إضافة الصور الرئيسية
    galleryContainer.innerHTML = images
        .map(img => `
            <div class="swiper-slide">
                <img src="${img}" alt="${project.title}">
            </div>
        `).join('');
    
    // إضافة الصور المصغرة
    thumbsContainer.innerHTML = images
        .map(img => `
            <div class="swiper-slide">
                <img src="${img}" alt="${project.title}">
            </div>
        `).join('');
    
    // تهيئة Swiper بعد إضافة الصور
    modal.show();
    
    // انتظر حتى يتم عرض المودال ثم قم بتهيئة Swiper
    setTimeout(() => {
        const thumbsSwiper = new Swiper('.portfolio-thumbs-swiper', {
            spaceBetween: 10,
            slidesPerView: 'auto',
            watchSlidesProgress: true,
        });

        new Swiper('.portfolio-gallery-swiper', {
            loop: true,
            spaceBetween: 0,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            thumbs: {
                swiper: thumbsSwiper
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            }
        });
    }, 300);
}

// دالة تحويل نوع المشروع إلى اسم مقروء
function getProjectTypeName(type) {
    const types = {
        'design': 'تصميم جرافيكي',
        'web': 'تطوير ويب',
        'social': 'سوشيال ميديا',
        'ads': 'إعلانات ممولة',
        'motion': 'موشن جرافيكس'
    };
    return types[type] || type;
}

// دالة تهيئة المشاريع
function initializePortfolio() {
    const portfolioContainer = document.querySelector('.portfolio-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // عرض كل المشاريع عند تحميل الصفحة
    displayProjects('all');

    // إضافة مستمعي الأحداث لأزرار التصفية
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-filter');
            
            // إزالة الكلاس النشط من كل الأزرار
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // إضافة الكلاس النشط للزر المختار
            button.classList.add('active');
            
            // عرض المشاريع المصفاة
            displayProjects(category);
        });
    });
}

// تشغيل التهيئة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();

    // تحديث شبكة المشاريع مع كل الأعمال
    updatePortfolioGrid();

    // إضافة مستمعي الأحداث لأزرار التصفية
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // إزالة الكلاس النشط من جميع الأزرار
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // إضافة الكلاس النشط للزر المحدد
            this.classList.add('active');
            
            // تحديث شبكة المشاريع
            updatePortfolioGrid(filter);
        });
    });
});

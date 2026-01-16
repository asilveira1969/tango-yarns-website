// #region agent log
// Setup verification instrumentation
fetch('http://127.0.0.1:7242/ingest/d2006560-5b1d-4a1e-a8a2-e85affe528e3',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:1',message:'Script loaded',data:{timestamp:Date.now()},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
// #endregion

// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// #region agent log
fetch('http://127.0.0.1:7242/ingest/d2006560-5b1d-4a1e-a8a2-e85affe528e3',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:5',message:'Navigation elements check',data:{navToggleExists:!!navToggle,navMenuExists:!!navMenu,navLinksCount:navLinks.length},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
// #endregion

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.getElementById('navbar');
// #region agent log
fetch('http://127.0.0.1:7242/ingest/d2006560-5b1d-4a1e-a8a2-e85affe528e3',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:38',message:'Navbar element check',data:{navbarExists:!!navbar},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
// #endregion
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(61, 49, 36, 0.12)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(61, 49, 36, 0.08)';
    }
    
    lastScroll = currentScroll;
});

// Catalog Filters
const filterButtons = document.querySelectorAll('.filter-btn');
const yarnItems = document.querySelectorAll('.yarn-item');
// #region agent log
fetch('http://127.0.0.1:7242/ingest/d2006560-5b1d-4a1e-a8a2-e85affe528e3',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:55',message:'Catalog elements check',data:{filterButtonsCount:filterButtons.length,yarnItemsCount:yarnItems.length},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
// #endregion

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        yarnItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-line') === filterValue) {
                item.style.display = 'block';
                // Fade in animation
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                // Fade out animation
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Lightbox Functionality
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxInfo = document.getElementById('lightbox-info');
const lightboxClose = document.getElementById('lightbox-close');
const yarnZoomButtons = document.querySelectorAll('.yarn-zoom');
// #region agent log
fetch('http://127.0.0.1:7242/ingest/d2006560-5b1d-4a1e-a8a2-e85affe528e3',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:92',message:'Lightbox elements check',data:{lightboxExists:!!lightbox,lightboxImageExists:!!lightboxImage,lightboxInfoExists:!!lightboxInfo,lightboxCloseExists:!!lightboxClose,yarnZoomButtonsCount:yarnZoomButtons.length},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
// #endregion

// Open lightbox
yarnZoomButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const imageSrc = button.getAttribute('data-image');
        const yarnItem = button.closest('.yarn-item');
        const yarnLine = yarnItem.querySelector('.yarn-line').textContent;
        const yarnCode = yarnItem.querySelector('.yarn-code').textContent;
        
        lightboxImage.src = imageSrc;
        lightboxImage.alt = `${yarnLine} - ${yarnCode}`;
        lightboxInfo.innerHTML = `<strong>${yarnLine}</strong><br>${yarnCode}`;
        
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
});

// Close lightbox
if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
        closeLightbox();
    });
}

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Close lightbox with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// Form Validation and Submission
const contactForm = document.getElementById('contact-form');
// #region agent log
fetch('http://127.0.0.1:7242/ingest/d2006560-5b1d-4a1e-a8a2-e85affe528e3',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:139',message:'Contact form check',data:{contactFormExists:!!contactForm},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
// #endregion

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        // Basic validation
        let isValid = true;
        const requiredFields = this.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = '#dc2626';
            } else {
                field.style.borderColor = '#D4C5B9';
            }
        });
        
        // Email validation
        const emailField = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailField && !emailRegex.test(emailField.value)) {
            isValid = false;
            emailField.style.borderColor = '#dc2626';
            alert('Please enter a valid email address.');
            return;
        }
        
        if (!isValid) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        console.log('Form data:', data);
        
        // Show success message
        alert('Thank you for your message! We will contact you soon.');
        
        // Reset form
        this.reset();
    });
}

// Animate elements on scroll (fade-in effect)
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.yarn-item, .distributor-region, .contact-item, .feature-item');
    
    // #region agent log
    const allImages = document.querySelectorAll('img');
    const brokenImages = [];
    allImages.forEach(img => {
        if (!img.complete || img.naturalWidth === 0) {
            brokenImages.push(img.src);
        }
    });
    fetch('http://127.0.0.1:7242/ingest/d2006560-5b1d-4a1e-a8a2-e85affe528e3',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:208',message:'DOMContentLoaded - Image check',data:{totalImages:allImages.length,brokenImagesCount:brokenImages.length,brokenImageSrcs:brokenImages.slice(0,5),animatedElementsCount:animatedElements.length},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'F'})}).catch(()=>{});
    // #endregion
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Initialize yarn items with initial styles
    yarnItems.forEach(item => {
        item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        item.style.opacity = '1';
        item.style.transform = 'scale(1)';
    });
    
    // #region agent log
    // Check image loading after a delay
    setTimeout(() => {
        const imageCheck = document.querySelectorAll('img');
        const failedImages = [];
        imageCheck.forEach(img => {
            img.addEventListener('error', () => {
                failedImages.push(img.src);
                fetch('http://127.0.0.1:7242/ingest/d2006560-5b1d-4a1e-a8a2-e85affe528e3',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:225',message:'Image load error detected',data:{failedImageSrc:img.src},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'F'})}).catch(()=>{});
            });
        });
    }, 1000);
    // #endregion
});

// Image lazy loading fallback (for browsers that don't support native lazy loading)
if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// Smooth hover effects for yarn items
yarnItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    item.addEventListener('mouseleave', function() {
        if (this.style.display !== 'none') {
            this.style.transform = 'translateY(0)';
        }
    });
});

// #region agent log
// Global error handler
window.addEventListener('error', (e) => {
    fetch('http://127.0.0.1:7242/ingest/d2006560-5b1d-4a1e-a8a2-e85affe528e3',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:250',message:'JavaScript error detected',data:{errorMessage:e.message,errorFilename:e.filename,errorLineno:e.lineno},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'G'})}).catch(()=>{});
});
// #endregion

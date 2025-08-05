// Custom JavaScript for VIKA Commodities Landing Page

// Language translations
const translations = {
    en: {
        nav_home: 'Home',
        nav_services: 'Services',
        nav_about: 'About',
        nav_contact: 'Contact',
        nav_system: 'Odoo System',
        hero_title: 'Sustainable Solutions in ',
        hero_biofuels: 'Biofuels',
        hero_description: 'VIKA Commodities specializes in sustainable commodities for biofuels, with <strong>REDcert</strong> certification and expertise in circular raw materials.',
        hero_products: 'Our Products',
        hero_certification: 'REDcert Certification',
        services_title: 'Our Sustainable Products',
        services_subtitle: '<strong>REDcert</strong> certified raw materials for advanced biofuels',
        product_uco_title: 'Used Cooking Oils (UCO)',
        product_uco_desc: 'REDcert certified used cooking oils for advanced biodiesel production and sustainable aviation fuel.',
        product_oleins_title: 'Acid Oleins',
        product_oleins_desc: 'High-quality acid oleins from vegetable oil refining, ideal for sustainable biofuels.',
        product_pome_title: 'POME & Residues',
        product_pome_desc: 'Palm Oil Mill Effluent, food waste and other certified waste & residues for circular economy.',
        about_title: 'Pioneers in Sustainability',
        about_description: 'VIKA Commodities specializes in sustainable raw materials for biofuels, promoting circular economy and transport decarbonization.',
        about_cert: 'REDcert Europe Certification',
        about_circular: 'Circular Economy',
        about_netzero: 'Net Zero Commitment',
        about_supply: 'Global Supply Chain',
        about_access: 'Access System',
        contact_title: 'Contact Us',
        contact_email: 'Email',
        contact_phone: 'Phone',
        contact_location: 'Location',
        contact_cta: 'Ready to revolutionize your commodities business?',
        contact_start: 'Get Started',
        footer_copyright: '© 2024 VIKA Commodities. All rights reserved.',
        footer_system: 'Odoo System',
        green_energy: 'Green Energy',
        renewable_solutions: 'Renewable Solutions',
        clean_resources: 'Clean Resources',
        water_environment: 'Water & Environment',
        biofuels: 'Biofuels',
        sustainable_growth: 'Sustainable Growth',
        clean_air: 'Clean Air',
        carbon_reduction: 'Carbon Reduction',
        circular_economy: 'Circular Economy',
        redcert_certified: 'REDcert Certified'
    },
    pt: {
        nav_home: 'Início',
        nav_services: 'Serviços',
        nav_about: 'Sobre',
        nav_contact: 'Contacto',
        nav_system: 'Sistema Odoo',
        hero_title: 'Soluções Sustentáveis em ',
        hero_biofuels: 'Biocombustíveis',
        hero_description: 'A VIKA Commodities é especialista em commodities sustentáveis para biocombustíveis, com certificação <strong>REDcert</strong> e expertise em matérias-primas circulares.',
        hero_products: 'Nossos Produtos',
        hero_certification: 'Certificação REDcert',
        services_title: 'Nossos Produtos Sustentáveis',
        services_subtitle: 'Matérias-primas certificadas <strong>REDcert</strong> para biocombustíveis avançados',
        product_uco_title: 'Óleos Alimentares Usados (UCO)',
        product_uco_desc: 'Óleos alimentares usados certificados REDcert para produção de biodiesel avançado e combustível de aviação sustentável.',
        product_oleins_title: 'Oleínas Ácidas',
        product_oleins_desc: 'Oleínas ácidas de alta qualidade provenientes do refino de óleos vegetais, ideais para biocombustíveis sustentáveis.',
        product_pome_title: 'POME & Resíduos',
        product_pome_desc: 'Palm Oil Mill Effluent, resíduos alimentares e outros waste & residues certificados para economia circular.',
        about_title: 'Pioneiros em Sustentabilidade',
        about_description: 'A VIKA Commodities é especialista em matérias-primas sustentáveis para biocombustíveis, promovendo a economia circular e a descarbonização do transporte.',
        about_cert: 'Certificação REDcert Europa',
        about_circular: 'Economia Circular',
        about_netzero: 'Compromisso Net Zero',
        about_supply: 'Cadeia de Fornecimento Global',
        about_access: 'Aceder ao Sistema',
        contact_title: 'Contacte-nos',
        contact_email: 'Email',
        contact_phone: 'Telefone',
        contact_location: 'Localização',
        contact_cta: 'Pronto para revolucionar seus negócios em commodities?',
        contact_start: 'Começar Agora',
        footer_copyright: '© 2024 VIKA Commodities. Todos os direitos reservados.',
        footer_system: 'Sistema Odoo',
        green_energy: 'Energia Verde',
        renewable_solutions: 'Soluções Renováveis',
        clean_resources: 'Recursos Limpos',
        water_environment: 'Água & Ambiente',
        biofuels: 'Biocombustíveis',
        sustainable_growth: 'Crescimento Sustentável',
        clean_air: 'Ar Limpo',
        carbon_reduction: 'Redução de Carbono',
        circular_economy: 'Economia Circular',
        redcert_certified: 'Certificado REDcert'
    },
    es: {
        nav_home: 'Inicio',
        nav_services: 'Servicios',
        nav_about: 'Acerca',
        nav_contact: 'Contacto',
        nav_system: 'Sistema Odoo',
        hero_title: 'Soluciones Sostenibles en ',
        hero_biofuels: 'Biocombustibles',
        hero_description: 'VIKA Commodities se especializa en commodities sostenibles para biocombustibles, con certificación <strong>REDcert</strong> y experiencia en materias primas circulares.',
        hero_products: 'Nuestros Productos',
        hero_certification: 'Certificación REDcert',
        services_title: 'Nuestros Productos Sostenibles',
        services_subtitle: 'Materias primas certificadas <strong>REDcert</strong> para biocombustibles avanzados',
        product_uco_title: 'Aceites de Cocina Usados (UCO)',
        product_uco_desc: 'Aceites de cocina usados certificados REDcert para producción de biodiésel avanzado y combustible de aviación sostenible.',
        product_oleins_title: 'Oleínas Ácidas',
        product_oleins_desc: 'Oleínas ácidas de alta calidad del refinado de aceites vegetales, ideales para biocombustibles sostenibles.',
        product_pome_title: 'POME & Residuos',
        product_pome_desc: 'Palm Oil Mill Effluent, residuos alimentarios y otros waste & residues certificados para economía circular.',
        about_title: 'Pioneros en Sostenibilidad',
        about_description: 'VIKA Commodities se especializa en materias primas sostenibles para biocombustibles, promoviendo la economía circular y la descarbonización del transporte.',
        about_cert: 'Certificación REDcert Europa',
        about_circular: 'Economía Circular',
        about_netzero: 'Compromiso Net Zero',
        about_supply: 'Cadena de Suministro Global',
        about_access: 'Acceder al Sistema',
        contact_title: 'Contáctanos',
        contact_email: 'Email',
        contact_phone: 'Teléfono',
        contact_location: 'Ubicación',
        contact_cta: '¿Listo para revolucionar tu negocio de commodities?',
        contact_start: 'Empezar Ahora',
        footer_copyright: '© 2024 VIKA Commodities. Todos los derechos reservados.',
        footer_system: 'Sistema Odoo',
        green_energy: 'Energía Verde',
        renewable_solutions: 'Soluciones Renovables',
        clean_resources: 'Recursos Limpios',
        water_environment: 'Agua y Ambiente',
        biofuels: 'Biocombustibles',
        sustainable_growth: 'Crecimiento Sostenible',
        clean_air: 'Aire Limpio',
        carbon_reduction: 'Reducción de Carbono',
        circular_economy: 'Economía Circular',
        redcert_certified: 'Certificado REDcert'
    }
};

// Language management
let currentLanguage = localStorage.getItem('language') || 'en';

// Function to change language (global scope)
window.changeLanguage = function(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    updatePageContent();
    updateCurrentLanguageDisplay();
};

// Function to update page content based on current language
function updatePageContent() {
    const elements = document.querySelectorAll('[data-lang-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.innerHTML = translations[currentLanguage][key];
        }
    });
    
    // Update page title and meta description
    const titleMap = {
        en: 'VIKA Commodities - Sustainable Solutions',
        pt: 'VIKA Commodities - Soluções Sustentáveis',
        es: 'VIKA Commodities - Soluciones Sostenibles'
    };
    
    const descriptionMap = {
        en: 'VIKA Commodities - Leading sustainable commodities solutions for biofuels',
        pt: 'VIKA Commodities - Líder em soluções comerciais para mercados de commodities',
        es: 'VIKA Commodities - Líder en soluciones comerciales para mercados de commodities'
    };
    
    document.title = titleMap[currentLanguage];
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.content = descriptionMap[currentLanguage];
    }
}

// Function to update current language display
function updateCurrentLanguageDisplay() {
    const currentLangElement = document.getElementById('current-lang');
    const langMap = { en: 'EN', pt: 'PT', es: 'ES' };
    if (currentLangElement) {
        currentLangElement.textContent = langMap[currentLanguage];
    }
}

// Dynamic Background Effects
function initDynamicBackground() {
    const heroSection = document.querySelector('.hero-section');
    
    // Parallax effect on scroll
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        
        // Apply parallax to hero background
        if (heroSection) {
            const heroBackground = heroSection.querySelector('::before');
            heroSection.style.transform = `translateY(${parallax}px)`;
        }
        
        // Fade background elements based on scroll
        const elements = document.querySelectorAll('.floating-element');
        elements.forEach((element, index) => {
            const elementTop = element.offsetTop;
            const elementHeight = element.offsetHeight;
            const windowHeight = window.innerHeight;
            
            if (scrolled + windowHeight > elementTop && scrolled < elementTop + elementHeight) {
                const opacity = 1 - (scrolled - elementTop + windowHeight) / (windowHeight + elementHeight);
                element.style.opacity = Math.max(0.3, Math.min(1, opacity));
            }
        });
        
        // Dynamic background color shift
        const scrollPercent = Math.min(scrolled / (document.body.scrollHeight - window.innerHeight), 1);
        if (heroSection) {
            const overlay = heroSection.querySelector('::after');
            const newOpacity = 0.1 + (scrollPercent * 0.3);
            heroSection.style.setProperty('--scroll-opacity', newOpacity);
        }
    });
    
    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);
    
    // Add scroll reveal to sections
    const sections = document.querySelectorAll('section:not(.hero-section)');
    sections.forEach(section => {
        section.classList.add('scroll-reveal');
        revealObserver.observe(section);
    });
    
    // Background image loading with fade-in
    const bgImage = new Image();
    bgImage.onload = function() {
        heroSection.style.opacity = '1';
        heroSection.style.transition = 'opacity 1s ease-in-out';
    };
    bgImage.src = 'images/20250805_1802_Futuristic Aviation Hub_simple_compose_01k1xjv615f7ptbcpezp32d0fj.png';
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize language
    updatePageContent();
    updateCurrentLanguageDisplay();
    
    // Initialize dynamic background effects
    initDynamicBackground();
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-dark');
            navbar.style.backgroundColor = 'rgba(33, 37, 41, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.backgroundColor = '';
            navbar.style.backdropFilter = '';
        }
    });
    
    // Active navigation link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navItems.forEach(navItem => {
                    navItem.classList.remove('active');
                    if (navItem.getAttribute('href') === `#${sectionId}`) {
                        navItem.classList.add('active');
                    }
                });
            }
        });
    });
    
    // Image lazy loading with fade-in effect
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
        
        // Add loaded class when image is actually loaded
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
        
        // If image is already cached and loaded
        if (img.complete) {
            img.classList.add('loaded');
        }
    });
    
    // Animate elements on scroll
    const animateElements = document.querySelectorAll('.card, .display-5, .lead');
    const elementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animateElements.forEach(el => {
        elementObserver.observe(el);
    });
    
    // Button click animations
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Typing effect for hero title (optional enhancement)
    const heroTitle = document.querySelector('.hero-section h1');
    if (heroTitle) {
        // Skip typing effect to avoid conflicts with language switching
        // The content will be managed by the language system
    }
    
    // Form validation and submission (if contact form is added later)
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add form validation logic here
            const formData = new FormData(this);
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'alert alert-success mt-3';
            const successMessages = {
                en: 'Message sent successfully! We will contact you soon.',
                pt: 'Mensagem enviada com sucesso! Entraremos em contacto em breve.',
                es: '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.'
            };
            successMessage.textContent = successMessages[currentLanguage];
            
            this.appendChild(successMessage);
            this.reset();
            
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        });
    }
    
    // Performance monitoring
    window.addEventListener('load', function() {
        console.log('VIKA Commodities Landing Page loaded successfully');
        
        // Track page load time
        const loadTime = performance.now();
        console.log(`Page load time: ${loadTime.toFixed(2)}ms`);
    });
    
    // Error handling for external resources
    window.addEventListener('error', function(e) {
        console.warn('Resource loading error:', e.target.src || e.target.href);
    });
});

// CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    .nav-link.active {
        color: #007bff !important;
        font-weight: 600;
    }
`;
document.head.appendChild(style);
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
        services_title: 'Our Services',
        services_subtitle: 'Comprehensive solutions for sustainable feedstock trading and renewable fuel production',
        service_trading_title: 'Global Feedstock Trading',
        service_trading_desc: 'We specialize in the sourcing, certification, and delivery of advanced feedstocks for renewable fuel production. Our portfolio includes Used Cooking Oil (UCO), animal fats, waste-based oils, and residues that comply with RED II and RED III sustainability criteria.',
        service_logistics_title: 'Tailored Logistics & Supply Chain Solutions',
        service_logistics_desc: 'From bulk shipments to containerized cargo, we offer end-to-end logistics coordination — including FOB, CIF, and DDP deliveries. Our team works closely with clients to adapt to operational constraints and regulatory requirements across regions.',
        service_technical_title: 'Technical Support & Quality Assurance',
        service_technical_desc: 'We support our partners with product specification analysis, lab coordination, and pre-shipment inspections to ensure product integrity. Our team has deep experience in quality control and sustainability documentation required for HVO and SAF production.',
        service_traceability_title: 'Traceability & IoT Integration',
        service_traceability_desc: 'Together with our group partners, we develop and implement cutting-edge technologies to ensure transparency and traceability in the supply chain — including IoT sensors and blockchain-compatible systems for feedstock custody control.',
        service_sourcing_title: 'Strategic Sourcing & Procurement Advisory',
        service_sourcing_desc: 'We help industrial clients and biofuel producers secure long-term supply contracts through reliable sourcing, regional intelligence, and risk-managed procurement strategies in Europe, the Middle East, North Africa, and South-East Asia.',
        region_europe: 'Europe',
        region_middle_east: 'Middle East',
        region_north_africa: 'North Africa',
        region_southeast_asia: 'South-East Asia',
        about_title: 'Global Trading Excellence in Sustainable Feedstocks',
        about_subtitle: 'Part of the Vika Group, scaling sustainable impact worldwide',
        about_intro: 'Vika Commodities is a global trading company specialized in advanced feedstocks for the production of renewable fuels, including <strong>HVO (Hydrotreated Vegetable Oil)</strong> and <strong>SAF (Sustainable Aviation Fuel)</strong>. We source and supply a wide portfolio of sustainable raw materials — such as UCO (Used Cooking Oil), animal fats, and other waste- and residue-based inputs — to biorefineries and fuel producers around the world.',
        about_operations: 'Part of the Vika Group, our operations are rooted in <strong>circular economy principles</strong> and powered by smart logistics, advanced traceability systems, and deep market knowledge. From sourcing to delivery, we ensure integrity, compliance, and high-quality standards at every step.',
        about_presence: 'With strategic presence in <strong>Europe, South-East Asia, the Middle East, and North Africa</strong>, we bridge global supply chains and connect reliable producers with demanding industrial clients. Through trusted partnerships and a strong on-the-ground network, we respond with agility to evolving regulatory and market dynamics.',
        about_mission: '"At Vika Commodities, we\'re not just moving volumes — we\'re scaling sustainable impact."',
        feature_feedstocks: 'Advanced Feedstocks',
        feature_feedstocks_desc: 'HVO & SAF production materials',
        feature_circular: 'Circular Economy',
        feature_circular_desc: 'Waste & residue-based inputs',
        feature_global: 'Global Presence',
        feature_global_desc: '4 strategic regions worldwide',
        feature_compliance: 'Quality Standards',
        feature_compliance_desc: 'Integrity & compliance assured',
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
        services_title: 'Nossos Serviços',
        services_subtitle: 'Soluções abrangentes para trading de matérias-primas sustentáveis e produção de combustíveis renováveis',
        service_trading_title: 'Trading Global de Matérias-Primas',
        service_trading_desc: 'Especializamo-nos no fornecimento, certificação e entrega de matérias-primas avançadas para produção de combustíveis renováveis. O nosso portfólio inclui Óleo Alimentar Usado (UCO), gorduras animais, óleos baseados em resíduos e outros que cumprem os critérios de sustentabilidade RED II e RED III.',
        service_logistics_title: 'Soluções Logísticas e de Cadeia de Fornecimento Personalizadas',
        service_logistics_desc: 'Desde embarques a granel até carga containerizada, oferecemos coordenação logística de ponta a ponta — incluindo entregas FOB, CIF e DDP. A nossa equipa trabalha em estreita colaboração com os clientes para se adaptar às limitações operacionais e requisitos regulamentares entre regiões.',
        service_technical_title: 'Suporte Técnico e Garantia de Qualidade',
        service_technical_desc: 'Apoiamos os nossos parceiros com análise de especificações de produtos, coordenação laboratorial e inspeções pré-embarque para garantir a integridade do produto. A nossa equipa tem experiência profunda em controlo de qualidade e documentação de sustentabilidade necessária para produção de HVO e SAF.',
        service_traceability_title: 'Rastreabilidade e Integração IoT',
        service_traceability_desc: 'Juntamente com os nossos parceiros do grupo, desenvolvemos e implementamos tecnologias de ponta para garantir transparência e rastreabilidade na cadeia de fornecimento — incluindo sensores IoT e sistemas compatíveis com blockchain para controlo de custódia de matérias-primas.',
        service_sourcing_title: 'Consultoria Estratégica de Fornecimento e Procurement',
        service_sourcing_desc: 'Ajudamos clientes industriais e produtores de biocombustíveis a garantir contratos de fornecimento a longo prazo através de fornecimento confiável, inteligência regional e estratégias de procurement geridas por risco na Europa, Médio Oriente, Norte de África e Sudeste Asiático.',
        region_europe: 'Europa',
        region_middle_east: 'Médio Oriente',
        region_north_africa: 'Norte de África',
        region_southeast_asia: 'Sudeste Asiático',
        about_title: 'Excelência Global em Matérias-Primas Sustentáveis',
        about_subtitle: 'Parte do Grupo Vika, escalando impacto sustentável mundialmente',
        about_intro: 'A Vika Commodities é uma empresa global de trading especializada em matérias-primas avançadas para a produção de combustíveis renováveis, incluindo <strong>HVO (Óleo Vegetal Hidrotratado)</strong> e <strong>SAF (Combustível de Aviação Sustentável)</strong>. Fornecemos uma ampla carteira de matérias-primas sustentáveis — como UCO (Óleo Alimentar Usado), gorduras animais e outros inputs baseados em resíduos — para biorrefinarias e produtores de combustível em todo o mundo.',
        about_operations: 'Parte do Grupo Vika, as nossas operações estão enraizadas nos <strong>princípios da economia circular</strong> e alimentadas por logística inteligente, sistemas avançados de rastreabilidade e profundo conhecimento do mercado. Do fornecimento à entrega, garantimos integridade, conformidade e padrões de alta qualidade em cada passo.',
        about_presence: 'Com presença estratégica na <strong>Europa, Sudeste Asiático, Médio Oriente e Norte de África</strong>, fazemos a ponte entre cadeias de fornecimento globais e conectamos produtores confiáveis com clientes industriais exigentes. Através de parcerias confiáveis e uma forte rede no terreno, respondemos com agilidade às dinâmicas regulamentares e de mercado em evolução.',
        about_mission: '"Na Vika Commodities, não movemos apenas volumes — escalamos impacto sustentável."',
        feature_feedstocks: 'Matérias-Primas Avançadas',
        feature_feedstocks_desc: 'Materiais para produção HVO & SAF',
        feature_circular: 'Economia Circular',
        feature_circular_desc: 'Inputs baseados em resíduos',
        feature_global: 'Presença Global',
        feature_global_desc: '4 regiões estratégicas mundiais',
        feature_compliance: 'Padrões de Qualidade',
        feature_compliance_desc: 'Integridade e conformidade asseguradas',
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
        services_title: 'Nuestros Servicios',
        services_subtitle: 'Soluciones integrales para trading de materias primas sostenibles y producción de combustibles renovables',
        service_trading_title: 'Trading Global de Materias Primas',
        service_trading_desc: 'Nos especializamos en el suministro, certificación y entrega de materias primas avanzadas para la producción de combustibles renovables. Nuestro portafolio incluye Aceite de Cocina Usado (UCO), grasas animales, aceites basados en residuos y otros que cumplen con los criterios de sostenibilidad RED II y RED III.',
        service_logistics_title: 'Soluciones Logísticas y de Cadena de Suministro Personalizadas',
        service_logistics_desc: 'Desde embarques a granel hasta carga conteneurizada, ofrecemos coordinación logística de extremo a extremo — incluyendo entregas FOB, CIF y DDP. Nuestro equipo trabaja estrechamente con los clientes para adaptarse a las limitaciones operacionales y requisitos regulatorios entre regiones.',
        service_technical_title: 'Soporte Técnico y Garantía de Calidad',
        service_technical_desc: 'Apoyamos a nuestros socios con análisis de especificaciones de productos, coordinación de laboratorio e inspecciones pre-embarque para garantizar la integridad del producto. Nuestro equipo tiene experiencia profunda en control de calidad y documentación de sostenibilidad requerida para producción de HVO y SAF.',
        service_traceability_title: 'Trazabilidad e Integración IoT',
        service_traceability_desc: 'Junto con nuestros socios del grupo, desarrollamos e implementamos tecnologías de vanguardia para garantizar transparencia y trazabilidad en la cadena de suministro — incluyendo sensores IoT y sistemas compatibles con blockchain para control de custodia de materias primas.',
        service_sourcing_title: 'Consultoría Estratégica de Sourcing y Procurement',
        service_sourcing_desc: 'Ayudamos a clientes industriales y productores de biocombustibles a asegurar contratos de suministro a largo plazo a través de sourcing confiable, inteligencia regional y estrategias de procurement gestionadas por riesgo en Europa, Medio Oriente, Norte de África y Sudeste Asiático.',
        region_europe: 'Europa',
        region_middle_east: 'Medio Oriente',
        region_north_africa: 'Norte de África',
        region_southeast_asia: 'Sudeste Asiático',
        about_title: 'Excelencia Global en Materias Primas Sostenibles',
        about_subtitle: 'Parte del Grupo Vika, escalando impacto sostenible mundialmente',
        about_intro: 'Vika Commodities es una empresa global de trading especializada en materias primas avanzadas para la producción de combustibles renovables, incluyendo <strong>HVO (Aceite Vegetal Hidrotratado)</strong> y <strong>SAF (Combustible de Aviación Sostenible)</strong>. Suministramos una amplia cartera de materias primas sostenibles — como UCO (Aceite de Cocina Usado), grasas animales y otros inputs basados en residuos — a biorefinerías y productores de combustible en todo el mundo.',
        about_operations: 'Parte del Grupo Vika, nuestras operaciones están enraizadas en <strong>principios de economía circular</strong> y alimentadas por logística inteligente, sistemas avanzados de trazabilidad y profundo conocimiento del mercado. Desde el suministro hasta la entrega, aseguramos integridad, cumplimiento y estándares de alta calidad en cada paso.',
        about_presence: 'Con presencia estratégica en <strong>Europa, Sudeste Asiático, Medio Oriente y Norte de África</strong>, conectamos cadenas de suministro globales y unimos productores confiables con clientes industriales exigentes. A través de asociaciones confiables y una fuerte red sobre el terreno, respondemos con agilidad a las dinámicas regulatorias y de mercado en evolución.',
        about_mission: '"En Vika Commodities, no solo movemos volúmenes — escalamos impacto sostenible."',
        feature_feedstocks: 'Materias Primas Avanzadas',
        feature_feedstocks_desc: 'Materiales para producción HVO & SAF',
        feature_circular: 'Economía Circular',
        feature_circular_desc: 'Inputs basados en residuos',
        feature_global: 'Presencia Global',
        feature_global_desc: '4 regiones estratégicas mundiales',
        feature_compliance: 'Estándares de Calidad',
        feature_compliance_desc: 'Integridad y cumplimiento asegurados',
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
        en: 'VIKA Commodities - Sustainable Feedstock Trading | HVO SAF Solutions',
        pt: 'VIKA Commodities - Trading Sustentável Matérias-Primas | Soluções HVO SAF',
        es: 'VIKA Commodities - Trading Sostenible Materias Primas | Soluciones HVO SAF'
    };
    
    const descriptionMap = {
        en: 'Global leader in sustainable commodities trading for biofuels. REDcert certified HVO and SAF feedstock supplier. Circular economy solutions for renewable energy.',
        pt: 'Líder global em trading de commodities sustentáveis para biocombustíveis. Fornecedor certificado REDcert de matérias-primas HVO e SAF. Soluções de economia circular.',
        es: 'Líder global en trading de commodities sostenibles para biocombustibles. Proveedor certificado REDcert de materias primas HVO y SAF. Soluciones economía circular.'
    };
    
    const keywordsMap = {
        en: 'VIKA Commodities, sustainable commodities, biofuels, renewable fuels, HVO, hydrotreated vegetable oil, SAF, sustainable aviation fuel, UCO, used cooking oil, REDcert certification, circular economy, feedstock trading, Europe, Middle East, North Africa, South East Asia',
        pt: 'VIKA Commodities, commodities sustentáveis, biocombustíveis, combustíveis renováveis, HVO, óleo vegetal hidrotratado, SAF, combustível aviação sustentável, UCO, óleo alimentar usado, certificação REDcert, economia circular, trading matérias-primas, Europa, Médio Oriente, Norte África, Sudeste Asiático',
        es: 'VIKA Commodities, commodities sostenibles, biocombustibles, combustibles renovables, HVO, aceite vegetal hidrotratado, SAF, combustible aviación sostenible, UCO, aceite cocina usado, certificación REDcert, economía circular, trading materias primas, Europa, Medio Oriente, Norte África, Sudeste Asiático'
    };
    
    document.title = titleMap[currentLanguage];
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.content = descriptionMap[currentLanguage];
    }
    
    // Update keywords meta tag
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
        metaKeywords.content = keywordsMap[currentLanguage];
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogTitle) {
        ogTitle.content = titleMap[currentLanguage];
    }
    if (ogDescription) {
        ogDescription.content = descriptionMap[currentLanguage];
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
// ============================================
// LANGUAGE TRANSLATION SYSTEM
// ============================================
const translations = {
    ar: {
        // Navbar
        'nav.home': 'الرئيسية',
        'nav.about': 'عن النادي',
        'nav.objectives': 'الأهداف',
        'nav.team': 'الفريق',
        'nav.membership': 'العضوية',
        'nav.activities': 'الأنشطة',
        'nav.rules': 'القواعد',
        'nav.founders': 'المؤسسين',
        'nav.competitions': 'المسابقات',

        // Hero
        'hero.welcome': 'أهلاً بكم في',
        'hero.title': 'نادي المعرفة العلمي التقني',
        'hero.subtitle': 'حيث يتلاقى العلم والموهبة لبناء مستقبل مشرق',
        'hero.cta': 'اكتشف المزيد',

        // About (Definition)
        'about.title': '1. التعريف',
        'about.card1.title': 'الاسم',
        'about.card1.text': 'نادي المعرفة',
        'about.card2.title': 'الاشراف',
        'about.card2.text': 'مدارس المعرفة الأهلية – مكة المكرمة',
        'about.card3.title': 'الفئة',
        'about.card3.text': 'طلاب الابتدائي و المتوسط والثانوي',

        // Objectives (Goals)
        'objectives.title': '2. الهدف',
        'objectives.card1.title': 'تنمية حب العلم',
        'objectives.card1.text': 'تنمية حب العلم والتقنية.',
        'objectives.card2.title': 'العمل المشترك',
        'objectives.card2.text': 'العمل المشترك للمشاركة في فعاليات تنافسية.',
        'objectives.card3.title': 'مهارات الفريق',
        'objectives.card3.text': 'تعزيز مهارات الفريق.',

        // Team (Admin Staff)
        'team.title': '3. الطاقم الإداري',
        'team.member1.name': 'حسين عبدالله المانع',
        'team.member1.role': 'مدير النادي',
        'team.member2.name': 'نضال جميل سندي',
        'team.member2.role': 'نائب مدير النادي',
        'team.member3.name': 'احمد محمد نور',
        'team.member3.role': 'مسؤول الانضمام والمقابلات',
        'team.member4.name': 'صهيب تركي ال احمد',
        'team.member4.role': 'مسؤول الفعاليات والمسابقات',
        'team.member5.name': 'تركي عصام الغامدي',
        'team.member5.role': 'مسؤول الديسكورد',

        // Membership
        'membership.title': '4. العضوية',
        'membership.item1': 'العضوية متاحة لطلاب مدارس المعرفة.',
        'membership.item2': 'يشترط الالتزام بالقواعد.',
        'btn.register': 'سجل الآن',

        // Activities
        'activities.title': '5. الأنشطة',
        'activities.card1.title': 'ورش بحثية وبرمجية.',
        'activities.card2.title': 'مسابقات علمية وتقنية.',
        'activities.card3.title': 'لقاءات وأنشطة جماعية.',

        // Rules
        'rules.title': '6. القواعد',
        'rules.item1': 'الاحترام واجب للجميع.',
        'rules.item2': 'يمنع الإساءة أو التنمر.',
        'rules.item3': 'الالتزام بالتوجيهات و التعليمات.',
        'rules.item4': 'المشاركة الفعالة في النادي.',

        // Founders
        'founders.title': 'المؤسسين',
        'founder1': 'حـسين المانــع',
        'founder2': 'صهيب ال احمد',
        'founder3': 'تـركي الغامدي',
        'founder4': 'احـــمــــد نـــور',
        'founder5': 'نضـال سنـــدي',

        // Competitions
        'competitions.title': 'رزنامة المسابقات',
        'th.competition': 'المسابقة',
        'th.date': 'التاريخ',
        'th.link': 'رابط المشاركة',
        'th.field': 'المجال',
        'btn.join': 'رابط المشاركة',

        // Footer
        'footer.title': 'نادي المعرفة',
        'footer.subtitle': 'العلمي التقني',
        'footer.copyright': 'جميع الحقوق محفوظة © 2026 نادي المعرفة - مدارس المعرفة الأهلية'
    },
    en: {
        // Navbar
        'nav.home': 'Home',
        'nav.about': 'Definition',
        'nav.objectives': 'Goals',
        'nav.team': 'Staff',
        'nav.membership': 'Membership',
        'nav.activities': 'Activities',
        'nav.rules': 'Rules',
        'nav.founders': 'Founders',
        'nav.membership': 'Join',
        'nav.competitions': 'Competitions',

        // Hero
        'hero.welcome': 'Welcome to',
        'hero.title': 'Al-Mareifih Scientific & Technical Club',
        'hero.subtitle': 'Where science and talent meet to build a bright future',
        'hero.cta': 'Discover More',

        // About
        'about.title': '1. Definition',
        'about.card1.title': 'Name',
        'about.card1.text': 'Al-Mareifih Club',
        'about.card2.title': 'Supervision',
        'about.card2.text': 'Al-Mareifih Private Schools - Makkah',
        'about.card3.title': 'Category',
        'about.card3.text': 'Elementary, Middle, and High School Students',

        // Objectives
        'objectives.title': '2. Goals',
        'objectives.card1.title': 'Love of Science',
        'objectives.card1.text': 'Developing love for science and technology.',
        'objectives.card2.title': 'Joint Work',
        'objectives.card2.text': 'Joint work to participate in competitive events.',
        'objectives.card3.title': 'Team Skills',
        'objectives.card3.text': 'Enhancing team skills.',

        // Team
        'team.title': '3. Administrative Staff',
        'team.member1.name': 'Hussein Abdullah Al-Mana',
        'team.member1.role': 'Club Director',
        'team.member2.name': 'Nidal Jameel Sindi',
        'team.member2.role': 'Deputy Club Director',
        'team.member3.name': 'Ahmed Mohammed Nour',
        'team.member3.role': 'Membership & Interview Officer',
        'team.member4.name': 'Suhaib Turki Al-Ahmed',
        'team.member4.role': 'Events & Competitions Officer',
        'team.member5.name': 'Turki Essam Al-Ghamdi',
        'team.member5.role': 'Discord Officer',

        // Membership
        'membership.title': '4. Membership',
        'membership.item1': 'Membership is available to Al-Mareifih Schools students.',
        'membership.item2': 'Commitment to rules is required.',

        // Activities
        'activities.title': '5. Activities',
        'activities.card1.title': 'Research & Programming Workshops.',
        'activities.card2.title': 'Scientific & Technical Competitions.',
        'activities.card3.title': 'Meetings & Group Activities.',

        // Rules
        'rules.title': '6. Rules',
        'rules.item1': 'Respect is mandatory for everyone.',
        'rules.item2': 'Abuse or bullying is prohibited.',
        'rules.item3': 'Adherence to guidelines and instructions.',
        'rules.item4': 'Active participation in the club.',

        // Founders
        'founders.title': 'Founders',
        'founder1': 'Hussein Al-Mana',
        'founder2': 'Suhaib Al-Ahmed',
        'founder3': 'Turki Al-Ghamdi',
        'founder4': 'Ahmed Nour',
        'founder5': 'Nidal Sindi',

        // Competitions
        'competitions.title': 'Competitions Calendar',
        'th.competition': 'Competition',
        'th.date': 'Date',
        'th.link': 'Link',
        'th.field': 'Field',
        'btn.join': 'Link',

        // Footer
        'footer.title': 'Al-Mareifih Club',
        'footer.subtitle': 'Scientific & Technical',
        'footer.copyright': 'All Rights Reserved © 2026 Al-Mareifih Club - Al-Mareifih Private Schools'
    }
};

const competitionsData = [
    {
        name: { ar: 'اولمبياد نسمو', en: 'Nesmo Olympiad' },
        date: { ar: 'سنوي', en: 'Yearly' },
        link: 'https://www.mawhiba.sa/discover-mawhiba/competitions/nsmo/',
        field: { ar: 'علوم - رياضيات – تقنية -كيمياء - فيزياء', en: 'Science - Math - Tech - Chemistry - Physics' }
    },
    {
        name: { ar: 'أولمبياد ابداع', en: 'Ibdaa Olympiad' },
        date: { ar: 'سنوي', en: 'Yearly' },
        link: 'https://www.mawhiba.sa/discover-mawhiba/competitions/national-olympiad-for-scientific-creativity/',
        field: { ar: 'البحث العلمي', en: 'Scientific Research' }
    },
    {
        name: { ar: 'مسابقة المعرفة للتميز العلمي', en: 'Al-Mareifih Excellence Competition' },
        date: { ar: 'سنوي', en: 'Yearly' },
        link: null,
        field: { ar: 'البحث العلمي – التجارب – البرمجة', en: 'Scientific Research - Experiments - Programming' }
    },
    {
        name: { ar: 'مسابقة التعلم عبر اللعب', en: 'Gamified Learning Competition' },
        date: { ar: 'سنوي', en: 'Yearly' },
        link: null,
        field: { ar: 'البرمجة', en: 'Programming' }
    },
    {
        name: { ar: 'الأولمبياد الوطني للبرمجة والذكاء الاصطناعي – أذكى', en: 'National Programming & AI Olympiad (Athka)' },
        date: { ar: 'سنوي', en: 'Yearly' },
        link: 'https://sdaia.gov.sa/ar/Sectors/BuildingCapacity/academy/bootcamps/Pages/ATHKAxKSU.aspx',
        field: { ar: 'البرمجة', en: 'Programming' }
    },
    {
        name: { ar: 'كانجارو موهبة', en: 'Kangaroo Mawhiba' },
        date: { ar: 'سنوي', en: 'Yearly' },
        link: 'https://www.kangarooksa.org/',
        field: { ar: 'الرياضيات - علوم', en: 'Math - Science' }
    },
    {
        name: { ar: 'ببراس موهبة', en: 'Bebras Mawhiba' },
        date: { ar: 'سنوي', en: 'Yearly' },
        link: 'https://www.bebrasksa.org/',
        field: { ar: 'معلوماتية', en: 'Informatics' }
    }
];

class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'ar';
        this.init();
    }

    init() {
        this.applyLanguage(this.currentLang);
    }

    applyLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('language', lang);

        // Update HTML attributes
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        // Update all translatable elements
        this.translatePage();
        this.renderCompetitions();
    }

    translatePage() {
        const elements = {
            // Navbar
            'nav-home': 'nav.home',
            'nav-about': 'nav.about',
            'nav-objectives': 'nav.objectives',
            'nav-team': 'nav.team',
            // 'nav-membership': 'nav.membership', // This ID doesn't exist in nav yet, skipping for now
            'nav-activities': 'nav.activities',
            'nav-rules': 'nav.rules',
            'nav-founders': 'nav.founders',
            'nav-membership': 'nav.membership',

            // Hero
            'hero-welcome': 'hero.welcome',
            'hero-title': 'hero.title',
            'hero-subtitle': 'hero.subtitle',
            'hero-cta': 'hero.cta',

            // About
            'about-title': 'about.title',
            'about-card1-title': 'about.card1.title',
            'about-card1-text': 'about.card1.text',
            'about-card2-title': 'about.card2.title',
            'about-card2-text': 'about.card2.text',
            'about-card3-title': 'about.card3.title',
            'about-card3-text': 'about.card3.text',

            // Objectives
            'objectives-title': 'objectives.title',
            'objectives-card1-title': 'objectives.card1.title',
            'objectives-card1-text': 'objectives.card1.text',
            'objectives-card2-title': 'objectives.card2.title',
            'objectives-card2-text': 'objectives.card2.text',
            'objectives-card3-title': 'objectives.card3.title',
            'objectives-card3-text': 'objectives.card3.text',

            // Team
            'team-title': 'team.title',
            'team-member1-name': 'team.member1.name',
            'team-member1-role': 'team.member1.role',
            'team-member2-name': 'team.member2.name',
            'team-member2-role': 'team.member2.role',
            'team-member3-name': 'team.member3.name',
            'team-member3-role': 'team.member3.role',
            'team-member4-name': 'team.member4.name',
            'team-member4-role': 'team.member4.role',
            'team-member5-name': 'team.member5.name',
            'team-member5-role': 'team.member5.role',

            // Membership
            'membership-title': 'membership.title',
            'membership-item1': 'membership.item1',
            'membership-item2': 'membership.item2',

            // Activities
            'activities-title': 'activities.title',
            'activities-card1-title': 'activities.card1.title',
            'activities-card2-title': 'activities.card2.title',
            'activities-card3-title': 'activities.card3.title',

            // Rules
            'rules-title': 'rules.title',
            'rules-item1': 'rules.item1',
            'rules-item2': 'rules.item2',
            'rules-item3': 'rules.item3',
            'rules-item4': 'rules.item4',

            // Founders
            'founders-title': 'founders.title',
            'founder1': 'founder1',
            'founder2': 'founder2',
            'founder3': 'founder3',
            'founder4': 'founder4',
            'founder5': 'founder5',

            // Competitions Headers
            'competitions-title': 'competitions.title',
            'th-competition': 'th.competition',
            'th-date': 'th.date',
            'th-link': 'th.link',
            'th-field': 'th.field',

            // Footer
            'footer-title': 'footer.title',
            'footer-subtitle': 'footer.subtitle',
            'footer-copyright': 'footer.copyright'
        };

        Object.keys(elements).forEach(id => {
            const element = document.getElementById(id);
            if (element && translations[this.currentLang][elements[id]]) {
                element.textContent = translations[this.currentLang][elements[id]];
            }
        });
    }

    renderCompetitions() {
        const tbody = document.getElementById('competitions-body');
        if (!tbody) return;

        tbody.innerHTML = '';
        const t = translations[this.currentLang];

        competitionsData.forEach(comp => {
            const tr = document.createElement('tr');

            const name = comp.name[this.currentLang];
            const date = comp.date[this.currentLang];
            const field = comp.field[this.currentLang];
            const linkHtml = comp.link
                ? `<a href="${comp.link}" target="_blank" class="btn-sm">${t['btn.join']} <i class="fas fa-external-link-alt"></i></a>`
                : '-';

            tr.innerHTML = `
                <td>${name}</td>
                <td>${date}</td>
                <td>${linkHtml}</td>
                <td>${field}</td>
            `;
            tbody.appendChild(tr);
        });
    }

    toggle() {
        const newLang = this.currentLang === 'ar' ? 'en' : 'ar';
        document.body.style.opacity = '0';
        setTimeout(() => {
            this.applyLanguage(newLang);
            document.body.style.opacity = '1';
        }, 300);
    }
}

// Initialize language manager
const languageManager = new LanguageManager();

document.addEventListener('DOMContentLoaded', () => {
    // ============================================
    // UTILS
    // ============================================
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;

    // ============================================
    // SOUND SYSTEM
    // ============================================
    class SoundManager {
        constructor() {
            this.enabled = localStorage.getItem('soundEnabled') !== 'false';
            this.audioContext = null;
            // Lazy load audio context on first interaction
            this.hasInteracted = false;
        }

        initAudioContext() {
            if (this.hasInteracted) return;
            try {
                this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
                this.hasInteracted = true;
            } catch (e) {
                console.log('Web Audio API not supported');
            }
        }

        playTone(frequency, duration, type = 'sine') {
            if (!this.enabled || !this.audioContext) return;

            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);

            oscillator.frequency.value = frequency;
            oscillator.type = type;

            gainNode.gain.setValueAtTime(0.05, this.audioContext.currentTime); // Lower volume
            gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration);

            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + duration);
        }

        hover() {
            // Disable hover sounds on mobile to prevent annoyance
            if (!isMobile) this.playTone(800, 0.05);
        }

        click() {
            if (!this.hasInteracted) this.initAudioContext();
            this.playTone(1200, 0.1);
        }

        success() {
            if (!this.hasInteracted) this.initAudioContext();
            this.playTone(1500, 0.15);
            setTimeout(() => this.playTone(1800, 0.15), 100);
        }

        toggle() {
            this.enabled = !this.enabled;
            localStorage.setItem('soundEnabled', this.enabled);
            if (this.enabled) this.click();
        }
    }

    const soundManager = new SoundManager();
    window.soundManager = soundManager; // Expose globally for inline HTML events

    // ============================================
    // PARTICLE SYSTEM (Optimized)
    // ============================================
    class ParticleSystem {
        constructor() {
            this.canvas = document.createElement('canvas');
            this.ctx = this.canvas.getContext('2d');
            this.particles = [];
            // Reduce particles on mobile for performance
            this.maxParticles = isMobile ? 20 : 50;
            this.init();
        }

        init() {
            this.canvas.style.position = 'fixed';
            this.canvas.style.top = '0';
            this.canvas.style.left = '0';
            this.canvas.style.width = '100%';
            this.canvas.style.height = '100%';
            this.canvas.style.pointerEvents = 'none';
            this.canvas.style.zIndex = '1';
            document.body.prepend(this.canvas);

            this.resize();
            window.addEventListener('resize', () => this.resize());

            for (let i = 0; i < this.maxParticles; i++) {
                this.particles.push(this.createParticle());
            }

            this.animate();
        }

        resize() {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            // Allow dynamic adjustment if needed, but keeping simple for now
        }

        createParticle() {
            return {
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 1, // Slightly smaller
                speedX: Math.random() * 0.5 - 0.25,
                speedY: Math.random() * 0.5 - 0.25,
                opacity: Math.random() * 0.5 + 0.1
            };
        }

        animate() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            this.particles.forEach(particle => {
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                // Wrap around screen
                if (particle.x < 0) particle.x = this.canvas.width;
                if (particle.x > this.canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = this.canvas.height;
                if (particle.y > this.canvas.height) particle.y = 0;

                // Draw particle
                this.ctx.beginPath();
                this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                // Use CSS var color if possible, effectively using hex here for perf
                this.ctx.fillStyle = `rgba(6, 182, 212, ${particle.opacity})`;
                this.ctx.fill();
            });

            requestAnimationFrame(() => this.animate());
        }
    }

    const particleSystem = new ParticleSystem();

    // ============================================
    // NAVIGATION
    // ============================================
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    if (burger) {
        burger.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent document click from closing immediately
            nav.classList.toggle('nav-active');
            // Animate burger lines implied by CSS or just toggle class
            burger.classList.toggle('toggle');
            soundManager.click();
        });

        // Close nav when clicking outside
        document.addEventListener('click', (e) => {
            if (nav.classList.contains('nav-active') && !nav.contains(e.target) && !burger.contains(e.target)) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        });
    }

    // ============================================
    // SMOOTH SCROLLING
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            soundManager.click();

            if (nav && nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ============================================
    // SCROLL REVEAL ANIMATIONS
    // ============================================
    const revealElements = document.querySelectorAll('.card, .obj-card, .activity-box, .team-member, .rule-item, .founder-card');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Ensure styles are applied by class, but set inline for override insurance
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target); // Optimize: stop observing once revealed
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        revealObserver.observe(el);
    });

    // ============================================
    // NAVBAR EFFECTS
    // ============================================
    const navbar = document.querySelector('.navbar');

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(15, 23, 42, 0.98)';
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
            } else {
                navbar.style.background = 'rgba(15, 23, 42, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        });
    }

    // ============================================
    // 3D TILT EFFECT (Desktop Only)
    // ============================================
    if (!isMobile) {
        const tiltElements = document.querySelectorAll('.card, .obj-card, .activity-box, .team-member, .founder-card');

        tiltElements.forEach(el => {
            el.style.transition = 'transform 0.1s ease'; // Faster for tilt

            el.addEventListener('mouseenter', () => soundManager.hover());

            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const xMid = rect.width / 2;
                const yMid = rect.height / 2;
                const xOffset = (x - xMid) / xMid;
                const yOffset = (y - yMid) / yMid;

                el.style.transform = `perspective(1000px) rotateX(${-yOffset * 5}deg) rotateY(${xOffset * 5}deg) scale(1.02)`;
            });

            el.addEventListener('mouseleave', () => {
                el.style.transition = 'transform 0.5s ease';
                el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            });
        });
    }

    // ============================================
    // RIPPLE EFFECT (Click Feedback)
    // ============================================
    function createRipple(e) {
        const button = e.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`;
        circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`;
        circle.classList.add('ripple');

        const ripple = button.getElementsByClassName('ripple')[0];
        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);
    }

    // ============================================
    // DEVICE SELECTION LOGIC
    // ============================================
    window.selectDevice = function (mode) {
        const overlay = document.getElementById('device-overlay');
        const clickSound = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU'); // Placeholder or rely on soundManager

        // Use existing sound manager if available
        if (typeof soundManager !== 'undefined') soundManager.click();

        if (mode === 'mobile') {
            document.body.classList.add('mobile-mode');
            document.body.classList.remove('desktop-mode');
        } else {
            document.body.classList.add('desktop-mode');
            document.body.classList.remove('mobile-mode');
        }

        // Fade out overlay
        if (overlay) {
            overlay.classList.add('hidden');
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 500);
        }

        // Trigger resize to update particles/layout
        window.dispatchEvent(new Event('resize'));
    };

    // Check if device already selected (Optional: persist choice)
    // const savedMode = localStorage.getItem('deviceMode');
    // if (savedMode) selectDevice(savedMode); 
    // Commented out to force selection every time for demo purposes as requested.

    // ============================================
    // SETTINGS MENU & CONTROLS
    // ============================================
    const settingsToggle = document.getElementById('settingsToggle');
    const settingsContainer = document.querySelector('.settings-container');
    const langSwitch = document.getElementById('langSwitch');
    const soundSwitch = document.getElementById('soundSwitch');

    if (settingsToggle) {
        settingsToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            settingsContainer.classList.toggle('active');
            soundManager.click();
        });

        document.addEventListener('click', (e) => {
            if (!settingsContainer.contains(e.target)) {
                settingsContainer.classList.remove('active');
            }
        });
    }

    if (langSwitch) {
        const updateLangStatus = () => {
            const status = langSwitch.querySelector('.toggle-status');
            if (status) status.textContent = languageManager.currentLang === 'ar' ? 'AR' : 'EN';
        };
        updateLangStatus();

        langSwitch.addEventListener('click', () => {
            soundManager.click();
            document.body.style.opacity = '0';
            setTimeout(() => {
                languageManager.toggle();
                updateLangStatus();
                document.body.style.opacity = '1';
            }, 300);
        });
    }

    if (soundSwitch) {
        const updateSoundStatus = () => {
            const status = soundSwitch.querySelector('.toggle-status');
            if (status) status.textContent = soundManager.enabled ? 'ON' : 'OFF';
            settingsToggle.style.opacity = soundManager.enabled ? '1' : '0.7';
        };
        updateSoundStatus();

        soundSwitch.addEventListener('click', () => {
            soundManager.toggle();
            updateSoundStatus();
        });
    }

    // ============================================
    // ON LOAD
    // ============================================
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        // Initial sound interaction requires user gesture usually, so we wait for first click
        // soundManager.success(); 
    });
});

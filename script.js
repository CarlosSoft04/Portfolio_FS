// Animações de entrada
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.hero-content > *, .code-card, .skill-card');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
            el.style.transition = 'all 0.8s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Atualizar idade automaticamente
const calculateAge = () => {
    const birthYear = 2005;
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
};

// Atualizar o código com a idade atual
document.addEventListener('DOMContentLoaded', () => {
    const age = calculateAge();
    const ageLine = document.querySelector('.code-content .line:nth-child(5)');
    if (ageLine) {
        ageLine.innerHTML = `<span class="line-number">5</span>        this.age = ${age};`;
    }
});

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
let isDark = false;

themeToggle.addEventListener('click', () => {
    isDark = !isDark;
    document.body.style.setProperty('--bg-color', isDark ? '#121212' : '#ffffff');
    document.body.style.setProperty('--text-color', isDark ? '#ffffff' : '#333333');
    themeToggle.querySelector('span').textContent = isDark ? 'LIGHT' : 'DARK';
});

// Animação de entrada para os itens de tecnologia
document.addEventListener('DOMContentLoaded', () => {
    const techItems = document.querySelectorAll('.tech-item');
    
    techItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.8s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Altere a URL da API para:
const API_URL = 'https://seu-app.onrender.com/api/email/send';

// Formulário de contato
document.querySelector('.contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert('Mensagem enviada com sucesso!');
            this.reset();
        } else {
            const error = await response.text();
            throw new Error(error);
        }
    } catch (error) {
        alert('Erro ao enviar mensagem: ' + error.message);
    }
});

// Animação da timeline
const timelineItems = document.querySelectorAll('.timeline-item');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, { 
    threshold: 0.1,
    rootMargin: '0px 0px -10% 0px'
});

timelineItems.forEach(item => {
    item.style.opacity = 1;
    item.style.transform = 'translateX(0)';
    observer.observe(item);
});

// Animação de entrada para os cards de hobbies usando Intersection Observer
const hobbyCards = document.querySelectorAll('.hobby-card');
const hobbyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

hobbyCards.forEach(card => {
    hobbyObserver.observe(card);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Menu Mobile
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const body = document.body;

// Função para fechar o menu
const closeMenu = () => {
    navMenu.classList.remove('active');
    body.style.overflow = '';
};

// Toggle do menu
menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('active');
    
    // Previne rolagem quando menu está aberto
    if (navMenu.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
});

// Fecha o menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            closeMenu();
            targetSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fecha o menu ao clicar fora
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !menuToggle.contains(e.target)) {
        closeMenu();
    }
});

// Fecha o menu ao rolar a página
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        closeMenu();
    }
    lastScrollTop = scrollTop;
}); 
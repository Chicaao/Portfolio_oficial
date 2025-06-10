document.addEventListener('DOMContentLoaded', () => {
    const hamburguerButton = document.querySelector('.hamburguer-menu')
    const navLinks = document.querySelector('.nav-links')
    const navItems = document.querySelectorAll('.nav-links li a')

    if (hamburguerButton && navLinks) {
        hamburguerButton.addEventListener('click', () => {
            navLinks.classList.toggle('active')
        })

        navItems.forEach(item => {
            item.addEventListener('click', () =>{
                navLinks.classList.remove('active');
            });
        });
    } else {
        console.warn("Erro: Elementos '.hamburguer-menu' ou '.nav-links' não encontrados no HTML.")
    }

    // Adicionar Scroll Suave a todos os links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Pega o ID da seção do atributo href (ex: "#about" -> "about")
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // NOVO: Lógica para o Botão Voltar ao Topo
    const backToTopButton = document.getElementById('backToTopBtn')

    // Ação ao rolar a página
    window.addEventListener('scroll', () => {
        // Mostra o botão se a rolagem for maior que 200px (ajuste conforme a necessidade) 
        if (window.scrollY > 200) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    if (backToTopButton) {
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // NOVO: Lógica para Animações de Revelação (Scroll Reveal)    
    if (typeof ScrollReveal !== 'undefined') {
        // configurações padrão para as animações
        const sr = ScrollReveal ({
            distance: '60px',
            duration: 1200,
            easing: 'cubic-bezier(.25, .46, .45, .94)',
            origin: 'bottom',
            reset: false
        });

        // Aplicando animações a elementos especificos

        // Hero Section Content
        sr.reveal('.hero-content h1', {origin: 'top', distance:'30px', duration: 1000, delay: 200});
        sr.reveal('.hero-content h2', {origin: 'top', distance:'30px', duration: 1000, delay: 400});
        sr.reveal('.profile-avatar', {origin: 'top', distance:'50px', duration: 1200, delay: 600});
        sr.reveal('.hero-content p', {origin: 'top', distance:'30px', duration: 1000, delay: 800});
        sr.reveal('.hero-buttons', {origin: 'top', distance:'30px', duration: 1000, delay: 1000});

        // Seções inteiras ou seus conteúdos
        sr.reveal('.about-section h2', {delay: 200});
        sr.reveal('.about-section p', {delay: 400, interval: 100});
        
        sr.reveal('.skills-section h2', {delay: 200});
        sr.reveal('.skill-item h2', {delay: 400, interval: 100});
        
        sr.reveal('.projects-section h2', {delay: 200});
        sr.reveal('.project-card', {delay: 400, interval: 150});
        
        sr.reveal('.contact-section h2', {delay: 200});
        sr.reveal('.contact-section p', {delay: 400});
        sr.reveal('.contact-form', {delay: 600});
        sr.reveal('.social-links', {delay: 800});

        sr.reveal('.footer', {origin: 'bottom', distance: '20px', duration: 1000, delay: 200});


    } else {
        console.warn("ScrollReveal não foi carregado. Verifique o link no HTML.");
    }
});
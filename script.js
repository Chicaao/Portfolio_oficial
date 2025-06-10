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
});
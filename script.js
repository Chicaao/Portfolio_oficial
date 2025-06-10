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
            const targetId = this.getAttribute('href').substring('');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
     });
});
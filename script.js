document.addEventListener('DOMContentLoaded', () => {
    const hamburguerButton = document.querySelector('.hamburguer-menu')
    const navLinks = document.querySelector('.nav-links')
    const navItems = document.querySelectorAll('nav-links li a')

    if (hamburguerButton && navLinks) {
        hamburguerButton.addEventListener('click', () => {
            navLinks.classList.toggle('active')
        })

        navItems.forEach(item => {
            item.addEventListener('click', () =>{
                navLinks.classList.remove('active');
            });
        });
    }
});
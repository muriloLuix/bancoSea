export function toggle(element) {
    element.classList.toggle("change");
}

// Abrir menu e fechar
document.addEventListener('DOMContentLoaded', () => {
    const hamburguerMenu = document.querySelector('.hamburguer-menu');
    const container = document.querySelector('.container');

    function toggleMenu() {
        toggle(container);
    }

    hamburguerMenu.addEventListener('click', toggleMenu);
});

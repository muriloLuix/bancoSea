function switchTheme() {
    const body = document.body;
    const greenBg = document.querySelector('.greenBg');
    const line = document.querySelectorAll('.line');
    const menu = document.querySelector('.menu-expanded');
    const menuLinks = document.querySelectorAll('.menu-link');
    const conteudo = document.querySelector('.conteudo')
    const toggleSwitch = document.querySelector('.toggle-switch');

    toggleSwitch.addEventListener('click', () => {
        body.classList.toggle('bodyDark');
        body.classList.toggle('bodyWhite');
        greenBg.classList.toggle('greenBgDark');
        menu.classList.toggle('menu-expandedDark');
        conteudo.classList.toggle('conteudoDark')

        menuLinks.forEach(link => {
            link.classList.toggle('menu-linkWhite');
        });

        line.forEach(link => {
            link.classList.toggle('lineWhite')
        })
    });
}

document.addEventListener('DOMContentLoaded', switchTheme);

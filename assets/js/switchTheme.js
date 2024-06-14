function switchTheme() {
    const body = document.body;
    const greenBg = document.querySelector('.greenBg');
    const line = document.querySelector('.line')
    const toggleSwitch = document.querySelector('.toggle-switch');

    toggleSwitch.addEventListener('click', () => {
        body.classList.toggle('bodyDark');
        body.classList.toggle('bodyWhite');

        if (body.classList.contains('bodyDark')) {
            greenBg.classList.add('greenBgDark');
            greenBg.classList.remove('greenBg');
            line.classList.add('lineWhite')
            line.classList.remove('line')
        } else {
            greenBg.classList.add('greenBg');
            greenBg.classList.remove('greenBgDark');
            line.classList.add('line')
            line.classList.remove('lineWhite')
        }
    });
}

document.addEventListener('DOMContentLoaded', switchTheme);

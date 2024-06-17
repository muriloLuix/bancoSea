function switchThemeImport() {
    const body = document.body;
    const btnFile = document.querySelector('.custom-file-input')
    const subTitleInput = document.querySelector('.subTitle');
    const toggleSwitch = document.querySelector(".toggle-switch");
    const wrapper = document.querySelector(".wrapper");
    const label = document.querySelector('.labelInput')


    toggleSwitch.addEventListener("click", () => {
        body.classList.toggle("bodyDark");
        body.classList.toggle("bodyWhite");
        wrapper.classList.toggle("wrapperDark");
        subTitleInput.classList.toggle('subTitleWhite')
        btnFile.classList.toggle('custom-file-inputDark')
        label.classList.toggle('labelInputWhite')
    });
}
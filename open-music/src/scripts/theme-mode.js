let lightMode = true;

const toggleButton = document.querySelector('.header__button__theme--toggle');

toggleButton.addEventListener('click', () => {

    document.documentElement.classList.toggle('dark');

    const mode = lightMode ? 'dark' : 'light';

    lightMode = !lightMode;

});
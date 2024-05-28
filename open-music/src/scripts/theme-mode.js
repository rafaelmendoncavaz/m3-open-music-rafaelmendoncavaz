export function toggleTheme() {

    const toggleButton = document.querySelector('.header__button__theme--toggle');
    
    toggleButton.addEventListener('click', () => {

        document.documentElement.classList.toggle('dark');

        if (document.documentElement.classList.contains('dark')) {

            localStorage.setItem('@openMusic:theme:', 'true');

        } else {

            localStorage.setItem('@openMusic:theme:', 'false');

        };

    });

};

export function loadTheme() {

    const theme = JSON.parse(localStorage.getItem('@openMusic:theme:'));

    if (theme) {

        document.documentElement.classList.add('dark');

    } else {

        document.documentElement.classList.remove('dark');

    };

};



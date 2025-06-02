/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navClose = document.getElementById('nav-close'),
      navToggle = document.getElementById('nav-toggle');
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/*==================== STYLE SWITCHER ====================*/
const styleSwitcher = document.getElementById('style-switcher'),
switcherToggle = document.getElementById('switcher-toggler'),
switcherClose = document.getElementById('switcher-close');

    switcherToggle.addEventListener('click', () => {
        styleSwitcher.classList.add('show-switcher');
    })

    switcherClose.addEventListener('click', () => {
        styleSwitcher.classList.remove('show-switcher');
    })

/*==================== DARK LIGHT THEME ====================*/
window.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggler'),
    icon = document.getElementById('theme-icon');

    function applyTheme(theme){
        if(theme === 'dark') {
            document.body.classList.add('dark-theme');
            icon.classList.remove('ri-sun-line')
            icon.classList.add('ri-moon-line')
        } else {
            document.body.classList.remove('dark-theme');
            icon.classList.remove('ri-moon-line')
            icon.classList.add('ri-sun-line')
        }

        localStorage.setItem('theme', theme);
    }

    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    toggleBtn.addEventListener('click', () => {
        const isDark = document.body.classList.contains('dark-theme');
        applyTheme(isDark ? 'light' : 'dark');
    })
})

/*==================== COLORS ====================*/
const colors = document.querySelectorAll('.theme-img');

window.addEventListener('DOMContentLoaded', () => {
    const savedHue = localStorage.getItem('hue');

    if(savedHue) {
         document.documentElement.style.setProperty('--hue', savedHue);
    }
});

colors.forEach((color) => {
    color.onclick = () => {
        const activeHue = color.style.getPropertyValue('--hue');

        document.documentElement.style.setProperty('--hue', activeHue);
        localStorage.setItem('hue', activeHue)
    };
});

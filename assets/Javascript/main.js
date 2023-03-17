const menu = document.getElementById('circle-menu');
const pagina = document.querySelector('.container');
const nav = document.querySelector('nav');
const i = menu.querySelector('i');

function toggleMenu() {
    pagina.classList.toggle('menu-active');
    nav.classList.toggle('aparece-menu');
    nav.classList.toggle('some-menu');
    menu.style.transform = pagina.classList.contains('menu-active') ? 'rotate(-65deg)' : 'rotate(-1deg)';
    i.classList.toggle('fa-times');
}
menu.addEventListener('click', toggleMenu);

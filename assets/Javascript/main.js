const menu = document.getElementById('circle-menu');
const menuIcon = document.querySelector('menu');
const pagina = document.querySelector('.container');
const nav = document.querySelector('nav');
const i = document.querySelector('i')

function abreFecha(){
    if(!pagina.classList.contains('menu-active')){
        pagina.classList.add('menu-active');
        nav.classList.remove('some-menu');
        nav.classList.add('aparece-menu');
        menu.style.transform = 'rotate(-65deg)';
        i.classList.add('fa-times');
    }else{
        pagina.classList.remove('menu-active');
        nav.classList.remove('aparece-menu');
        nav.classList.add('some-menu');
        menu.style.transform = 'rotate(-1deg)';

    }
}
menu.addEventListener('click', abreFecha);
const menu = document.getElementById('menu');
const pagina = document.querySelector('.container');
const nav = document.querySelector('nav')

function abreFecha(){
    if(!pagina.classList.contains('menu-active')){
        pagina.classList.add('menu-active');
        nav.classList.remove('some-menu');
        nav.classList.add('aparece-menu');
    }else{
        pagina.classList.remove('menu-active');
        nav.classList.remove('aparece-menu');
        nav.classList.add('some-menu');
    }
}
menu.addEventListener('click', abreFecha)
const menu = document.querySelector('.menu')
const btnmenu = document.querySelector('.btnMenu')
const btnclose = document.querySelector('.btnMenu_close')


btnmenu.addEventListener('click', function(){
    menu.classList.add('menu_open');
})

btnclose.addEventListener('click', function(){
    menu.classList.remove('menu_open');
})


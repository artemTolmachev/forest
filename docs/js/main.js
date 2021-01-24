$(document).ready(function(){

    const toggle = document.querySelector('.toggle-menu');
    const mobMenu = document.querySelector('.mobile-menu');
    const mobOverlay = document.querySelector('.overlay');
    const nonescroll = document.querySelector('body');
    // const mobMenu = document.querySelector('.mobile-menu');
    
    toggle.addEventListener('click', function(){  //клик по иконки гамбургер
        this.classList.toggle('active');
        mobMenu.classList.toggle('active-menu'); //мобильное меню активное
        mobOverlay.classList.toggle('active'); //оверлей активный
        nonescroll.classList.toggle('nonescroll');//блок скролла
    });
    mobMenu.addEventListener('click',function(){
        this.classList.remove('active-menu');
        nonescroll.classList.remove('nonescroll');
        mobOverlay.classList.remove('active');
        toggle.classList.remove('active');
    })

});
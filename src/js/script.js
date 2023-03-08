const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeCross = document.querySelector('.menu__close'),
      menu_links = document.querySelectorAll('.menu__link'), 
      menu_social_links = document.querySelector('.menu__social');
      
hamburger.addEventListener('click', () => {
    let scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    menu.classList.add('active');
    document.body.style.cssText = `overflow:hidden;margin-right:${scrollBarWidth}px;background-color:#BED9EC`;
});

closeCross.addEventListener('click', function() {
    menu.classList.remove('active');
    document.body.style.cssText = '';
});

menu_links.forEach(function(link) {
    link.querySelector('a').addEventListener('click', function() {
        menu.classList.remove('active');
    });
});

menu_social_links.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
        menu.classList.remove('active');
    });
});

const skills_values = document.querySelectorAll('.progress__value'),
      skills_scales = document.querySelectorAll('.progress__item__scale');

skills_values.forEach( (value, i) => {
    skills_scales[i].style.width = value.innerHTML;
});
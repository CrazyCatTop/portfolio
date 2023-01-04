const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeCross = document.querySelector('.menu__close'),
      menu_links = document.querySelectorAll('.menu__link'), 
      menu_social_links = document.querySelector('.menu__social');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeCross.addEventListener('click', function() {
    menu.classList.remove('active');
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
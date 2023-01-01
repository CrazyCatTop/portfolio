const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeCross = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeCross.addEventListener('click', function() {
    menu.classList.remove('active');
});
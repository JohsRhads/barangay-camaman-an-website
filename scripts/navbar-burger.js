document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burgerBtn');
    const menu = document.getElementById('navMenu');

    if (burger && menu) {
        burger.addEventListener('click', function() {
            menu.classList.toggle('show');
            burger.classList.toggle('active');
        });
    }
}); 
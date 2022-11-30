const user_button = document.querySelector('.header-box__user-button');
const user_navigation = document.querySelector('.user-nav');
const nav_button = document.querySelector('.header-box__nav-button');
const main_navigation = document.querySelector('.main-nav');

main_navigation.classList.add('hidden');
user_navigation.classList.add('hidden');

user_button.addEventListener('click', () => {
    user_navigation.classList.toggle('hidden');
    main_navigation.classList.add('hidden');
});

nav_button.addEventListener('click', () => {
    main_navigation.classList.toggle('hidden');
    user_navigation.classList.add('hidden');
});
export const navbar = () => {
    const mobileNav = document.querySelector('nav');
    const navButton = document.querySelector('.burger-button');

    function toggleNavButton() {
        navButton.classList.toggle('open');
        mobileNav.classList.toggle('translate-x-full');
    }
    
    navButton.addEventListener('click', toggleNavButton);
}
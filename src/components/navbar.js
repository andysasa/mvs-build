export const navbar = () => {
    const mobileNav = document.querySelector('nav');
    const navButton = document.querySelector('.burger-button');

    function toggleNavButton() {
        navButton.classList.toggle('open');
        mobileNav.classList.toggle('translate-x-full');
    }

    function updateList() {
        const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
            return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
        });
    
        document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));
        
        document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
    }
    
    updateList();
    window.addEventListener('scroll', updateList);
    navButton.addEventListener('click', toggleNavButton);
}
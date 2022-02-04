export const parallax = () => {
    const hero = document.querySelector('.hero');
    const quoteSection = document.querySelector('.quote');
    const quoteTitle = document.querySelector('.quote-title');
    const quoteBar = document.querySelector('.quote-bar');
    const quoteContent = document.querySelector('.quote-content');

    const translate = document.querySelectorAll('.translate');
    const value = window.scrollY;
    
    translate.forEach(e => {
        const speed = e.dataset.speed;
        
        const scrollParallax = speed * value;
        const quoteSectionHeight = quoteSection.getBoundingClientRect().height;
        const quoteTitleTop = quoteTitle.getBoundingClientRect().top;
        const quoteSectionTop = quoteSection.getBoundingClientRect().top;
        
        const heroHeight = hero.getBoundingClientRect().height;
        const quoteContentHeight = quoteContent.getBoundingClientRect().height;
        const fadeIn = (value * 2) / heroHeight;

        const quoteTitleParallax = (quoteSectionTop/(scrollY * 2)) * 10;
        const quoteBarParallax = (value/heroHeight) * quoteContentHeight;
        // console.log(value);
        // console.log(heroHeight);
        console.log(quoteContentHeight);
        // console.log(quoteBarParallax);

        quoteTitle.style.transform = `translateY(${quoteTitleParallax}px)`;
        quoteTitle.style.opacity = `${fadeIn}`;
        if ((value/heroHeight) < 1) {
            quoteBar.style.height = `${quoteBarParallax}px`;
        }
        // console.log(quoteBar.style.height);
    })
}
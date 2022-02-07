export const parallax = () => {
    const header = document.querySelector('header');
    const hero = document.querySelector('.hero');
    const quoteSection = document.querySelector('.quote');
    const quoteTitle = document.querySelector('.quote-title');
    const quoteBar = document.querySelector('.quote-bar');
    const quoteContent = document.querySelector('.quote-content');
    const servicesSection = document.querySelector('.services');
    const servicesBar = document.querySelector('.services-bar');
    const workSection = document.querySelector('.work');
    const workBar = document.querySelector('.work-bar')
    const translate = document.querySelectorAll('.translate');
    const value = window.scrollY;

    translate.forEach(e => {
        const speed = e.dataset.speed;


        // section heights
        const headerHeight = header.getBoundingClientRect().height;
        const heroHeight = hero.getBoundingClientRect().height;
        const quoteSectionHeight = quoteSection.getBoundingClientRect().height;
        const quoteContentHeight = quoteContent.getBoundingClientRect().height;
        const servicesSectionHeight = servicesSection.getBoundingClientRect().height;

        // section tops
        const quoteTitleTop = quoteTitle.getBoundingClientRect().top;
        const quoteSectionTop = quoteSection.getBoundingClientRect().top;
        const servicesSectionTop = servicesSection.getBoundingClientRect().top;
        const workSectionTop = workSection.getBoundingClientRect().top;

        // parallax
        const scrollParallax = speed * value;
        const quoteTitleParallax = (quoteSectionTop/(scrollY * 2)) * 35;
        const fadeIn = (value * 2) / heroHeight;

        const quoteBarStart = -(heroHeight/2 + headerHeight) + value;
        const quoteBarScrolledThrough = (heroHeight/2 + headerHeight + 96)
        const quoteBarParallax = (quoteBarStart/(heroHeight/2 + headerHeight + 96)) * quoteContentHeight;

        const servicesStart = (value - (servicesSectionTop/2));
        const servicesBarParallax = servicesStart / (heroHeight + quoteSectionHeight) * 3.5;

        const workStart = (value - workSectionTop)
        const workBarParallax = workStart / (heroHeight + quoteSectionHeight + servicesSectionHeight) * 3.5;


        quoteTitle.style.transform = `translateY(${quoteTitleParallax}px)`;
        quoteTitle.style.opacity = `${fadeIn}`;

        if ((quoteBarStart/quoteBarScrolledThrough) < 1) {
            quoteBar.style.height = `${quoteBarParallax}px`;
        }

        if (servicesStart > 0 && servicesSectionTop > 0) {
            servicesBar.style.width = `${servicesBarParallax}rem`;
        }

        if (workStart > 0 && workSectionTop > 0) {
            workBar.style.width = `${workBarParallax}rem`;
        }

    })
}
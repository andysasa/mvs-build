export const accordion = () => {
    const accHeadings = document.querySelectorAll('.accordion-heading');

    function handleAccordion() {
        const accDetails = this.nextElementSibling;
        if (accDetails.style.maxHeight) {
            this.firstElementChild.firstElementChild.textContent = '+ ';
            accDetails.style.maxHeight = null;
        } else {
            this.firstElementChild.firstElementChild.textContent = '- ';
            accDetails.style.maxHeight = accDetails.scrollHeight + 'px';
        }
    }    

    accHeadings.forEach(heading => heading.addEventListener('click', handleAccordion));
}
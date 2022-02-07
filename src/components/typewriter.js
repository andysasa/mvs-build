export class Typewriter {
    constructor(textElement, words, wait = 500) {
      this.textElement = textElement;
      this.words = words;
      this.wait = parseInt(wait, 10);
      this.wordIndex = 0
      this.text = '';
      this.isDeleting = false;
      this.type();
      
    }
  
    type() {
      const current = this.wordIndex % this.words.length;
      const fullText = this.words[current];
  
      if (this.isDeleting) {
        this.text = fullText.substring(0, this.text.length - 1);
      } else {
        this.text = fullText.substring(0, this.text.length + 1);
      }
     
      if (current === 3) {
        this.textElement.innerHTML = `<span class="typewriter-text-end">${this.text}</span>`;
      } else {
        this.textElement.innerHTML = `<span class="typewriter-text">${this.text}</span>`;
    }
    
    
    let typeSpeed = 150;
    
    if (this.isDeleting) {
        typeSpeed /= 2;
    }
    
    if (!this.isDeleting && this.text === fullText) {
        if (current === 3) {
            this.textElement.innerHTML = `<span class="typewriter-text-end">${this.text}<span class="period">.</span></span>`;
          return;
        }
        typeSpeed = this.wait;
        this.isDeleting = true;
      } else if (this.isDeleting && this.text === '') {
        this.isDeleting = false;
        typeSpeed = 150;
        this.wordIndex++;
      }

  
      setTimeout(() => this.type(), typeSpeed);
    }
  }
  
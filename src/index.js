import { navbar } from './components/navbar.js';
import { Typewriter } from './components/typewriter.js';
import { parallax } from './components/parallax.js';
import { accordion } from './components/accordion.js';
import './style.css';
import '../assets/images/profile-photo.jpg';

document.addEventListener("DOMContentLoaded", init);

function init() {
  const textElement = document.querySelector('.txt-type');
  const words = JSON.parse(textElement.getAttribute('data-words'));
  const wait = textElement.getAttribute('data-wait');

  new Typewriter(textElement, words, wait);
  window.addEventListener('scroll', parallax);
  
  accordion();
  navbar();
}

// const Typewriter = function(textElement, words, wait = 600) {
//   this.textElement = textElement;
//   this.words = words;
//   this.text = '';
//   this.wordIndex = 0;
//   this.wait = parseInt(wait, 10);
//   this.isDeleting = false;
//   this.type();
// }

// Typewriter.prototype.type = function() {
//   // get the word
//   const current = this.wordIndex % this.words.length;
//   const fullText = this.words[current];

//   if (this.isDeleting) {
//     // remove char
//     this.text = fullText.substring(0, this.text.length-1);
//   } else {
//     // add char
//     this.text = fullText.substring(0, this.text.length+1);
//   }

// this.textElement.innerHTML = `<span class="typewriter-text">${this.text}</span>`;

//   if (current === 3) {
//     this.textElement.innerHTML = `<span class="typewriter-text-end">${this.text}</span>`;
//   } else {
//     this.textElement.innerHTML = `<span class="typewriter-text">${this.text}</span>`;
//   }

//   let typeSpeed = 150;

//   if (this.isDeleting) {
//     typeSpeed /= 2;
//   }

//   if (!this.isDeleting && this.text === fullText) {
//     if (fullText == this.words[3]) {
//       return;
//     }
//     typeSpeed = this.wait;
//     this.isDeleting = true;
//   } else if (this.isDeleting && this.text === '') {
//     this.isDeleting = false;
//     this.wordIndex++;
//     typeSpeed = 150;
//   }

//   setTimeout(() => this.type(), typeSpeed)
// }

// // init typewriter on load
// document.addEventListener('DOMContentLoaded', init);

// // init function
// function init() {
//   const textElement = document.querySelector('.txt-type');
//   const words = JSON.parse(textElement.getAttribute('data-words'));
//   const wait = textElement.getAttribute('data-wait');  

//   new Typewriter(textElement, words, wait);
// }

